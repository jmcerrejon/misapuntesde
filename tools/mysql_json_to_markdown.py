"""
Author: Jose Manuel Cerrejon Gonzalez
Email: ulysess_at_.gmail.com
This script is used to convert the entire old MySQL database to markdown. The database was exported to a JSON file with the following structure:

{
    "type": "table",
    "name": "category",
    "data": [
        {
            "ID": 1,
            "description_en": "Category 1",
            "description_es": "Categoría 1"
        },
        {
            "ID": 2,
            "description_en": "Category 2",
            "description_es": "Categoría 2"
        }
    ]
},
{
    "type": "table",
    "name": "post_category",
    "data": [
        {
            "IDpost": 1,
            "IDcategory": 1
        },
        {
            "IDpost": 1,
            "IDcategory": 2
        }
    ]
},
{
    "type": "table",
    "name": "post",
    "data": [
        {
            "ID": 1,
            "title_es": "Publicación 1",
            "title_en": "Post 1",
            "date": "2024-01-01",
            "count_visited": "0",
            "comment_es": "Contenido 1",
            "comment_en": "Content 1"
        },
        ...
    ]
}
"""


import contextlib
import json
import re
from datetime import datetime
import os

SITE_DOMAIN_NAME = "misapuntesde.com"
DEFAULT_VALUE_UNCATEGORIZED = "Uncategorized"  # or General
LOCALES = ["en", "es"]
AUTHOR = "Jose Cerrejon"
BASE_URL = "https://misapuntesde.com"

json_file_path = f"{os.path.dirname(os.path.abspath(__file__))}/db504981946.json"
categories = []
post_categories = []


def search_category_by_id(id: int, locale: str = "en") -> str:
    return next(
        (
            val[f"description_{locale}" if locale in LOCALES else "description_en"]
            for val in categories
            if int(val["ID"]) == id
        ),
        DEFAULT_VALUE_UNCATEGORIZED,
    )


def search_post_categories_by_post_id(post_id: int) -> list[str]:
    return [
        search_category_by_id(int(val["IDcategory"]), "en")
        for val in post_categories
        if int(val["IDpost"]) == post_id
    ]


def convert_date(date_string: str) -> datetime:
    for format in ["%Y-%m-%d %H:%M:%S", "%Y-%m-%d"]:
        with contextlib.suppress(ValueError):
            return datetime.strptime(date_string, format).strftime("%Y-%m-%d")
    raise ValueError(f"No valid date format found for {date_string}")


def title_to_slug(title: str) -> str:
    return re.sub(
        r"^-|-$", "", re.sub(r"[\s-]+", "-", re.sub(r"[^a-z0-9 -]", "", title.lower()))
    )


def clean_title(title: str) -> str:
    return re.sub(r"\[.*?\]", "", title.replace(":", ".").replace('"', ""))


def frontmatter_header(data: dict, locale: str = "en") -> str:
    result = list(
        f"""---
id: {data["ID"]}
title: {clean_title(data[f"title_{locale}"])}
author: {AUTHOR}
icon: pen-to-square
date: {data["date"]}
prev: /
next: false
category:
"""
    )

    # Categories & tags

    categories = search_post_categories_by_post_id(int(data["ID"]))
    category_and_tag_values: str = "".join(
        f"  - {category}\n" for category in categories
    )
    result.extend(
        (f"{category_and_tag_values}tag:\n{category_and_tag_values}", "---\n")
    )
    return "".join(result)


def set_markdown_title(title: str) -> str:
    return f"\n# {title}\n\n"


def output_to_file(directory: str, filename: str, content: str):
    try:
        if not os.path.exists(directory):
            os.makedirs(directory)

        with open(f"{directory}/{filename}.md", "w") as file:
            file.write(content)
    except Exception as e:
        print(f"An error occurred while writing to file: {e}")


def refactor_markdown_body(body: str) -> str:
    # Make relative the URL
    result = re.sub(r"!\[(.*?)\]\((.*?)\)", r"![\1](\2)", body)
    result = result.replace(BASE_URL, "").replace(f"//{SITE_DOMAIN_NAME}", "")
    # Remove <blockquote> and <scrip> tags and its content. Not supported for now
    result = re.sub(r"<blockquote.*?</blockquote>", "", result, flags=re.DOTALL)
    result = re.sub(r"<script.*?</script>", "", result, flags=re.DOTALL)
    # Personal Hack I: Remove the line containing the sentence "Twitter of the week" (english/spanish)
    result = re.sub(r"Twitter of the week.*", "", result)
    result = re.sub(r"Twitter de la semana.*", "", result)
    # Personal Hack II: Change Code blocks section
    result = re.sub(r'<pre><code class="language-bash">', "```bash", result)
    result = re.sub(r'<pre><code class="language-mysql">', "```sql", result)
    result = re.sub(r".*</code></pre>.*", "```", result)
    result = re.sub(r".*<code>", "", result)
    result = re.sub(r".*</code>", "", result)
    # Personal Hack III: Transform lightbox images to markdown
    result = re.sub(
        r'<a href="([^"]*)" rel="lightbox" title="([^"]*)"><img src="[^"]*"[^>]*></a>',
        r'![\2](\1 "\2")',
        result,
    )
    result = re.sub(
        r"\r\n######.*",
        "",
        result,
    )
    result = result.replace(r"###", r"### ")

    return result


def main():
    global categories
    global post_categories

    with open(json_file_path, "r") as file:
        data = json.load(file)

        #  categories & post_categories

        for post in data:
            match post["type"], post["name"]:
                case "table", "category":
                    categories = list(post["data"])
                case "table", "post_category":
                    post_categories = list(post["data"])

        #  posts

        index = 0
        for post in data:
            match post["type"], post["name"]:
                case "table", "post":
                    for single_post in post["data"]:
                        for locale in LOCALES:
                            header = frontmatter_header(
                                single_post,
                                locale,
                            ) + set_markdown_title(
                                single_post[
                                    f"title_{locale}"
                                    if locale in LOCALES
                                    else "title_en"
                                ]
                            )
                            body = refactor_markdown_body(
                                single_post[
                                    f"comment_{locale}"
                                    if locale in LOCALES
                                    else "title_en"
                                ]
                            )
                            file_path = title_to_slug(single_post["title_en"])
                            year = convert_date(single_post["date"]).split("-")[0]
                            month = convert_date(single_post["date"]).split("-")[1]
                            output_to_file(
                                f"{locale}/{year}/{month}",
                                file_path,
                                header + body,
                            )
                        # Uncomment the line index = 0 & the next to test with x posts (index == 1, 2, 3, etc.)
                        # if index == 2:
                        #     break
                        index += 1


if __name__ == "__main__":
    main()

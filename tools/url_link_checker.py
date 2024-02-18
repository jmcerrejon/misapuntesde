"""
Author: Jose Manuel Cerrejon Gonzalez
Email: ulysess_at_.gmail.com
Code to check if a list of urls are valid inside markdown files in a directory (recursive).

Usage:
    python3 url_link_checker.py full/path/to/directory/with/markdown/files
    last checked: python3 url_link_checker.py /Users/ulysess/Documents/sc/misa_vue/src/2019
"""

import os
import re
import sys
import requests


def is_link_active(url):
    check_http_error_codes = [400, 401, 403, 404, 405, 406, 407, 408, 409, 410, 411]
    response = requests.head(url)
    if response.status_code in check_http_error_codes:
        return False
    return True


def process_markdown_file(file_path):
    with open(file_path, "r") as file:
        content = file.read()
    links = re.findall(r"\[(.*?)\]\((.*?)\)", content)
    broken_links = [
        (link[0], file_path)
        for link in links
        if not link[1].startswith("https://misapuntesde.com")
        and link[1].startswith("http")
        and not is_link_active(link[1])
    ]
    return broken_links


def process_folder(folder_path):
    broken_links = []
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.endswith(".md"):
                broken_links.extend(process_markdown_file(os.path.join(root, file)))
    return broken_links


directory_path = sys.argv[1] if len(sys.argv) > 1 else "./"
broken_links = process_folder(directory_path)
for link, file in broken_links:
    print(f"Broken link: {link}, File: {file}")

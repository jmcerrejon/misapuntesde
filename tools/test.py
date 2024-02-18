import re


def convert_html_to_md(html_string):
    pattern = (
        r'<a href="([^"]*)" rel="lightbox" title="([^"]*)"><img src="[^"]*"[^>]*></a>'
    )
    replacement = r"![\2](\1)"
    md_string = re.sub(pattern, replacement, html_string)
    return md_string


html_string = '<a href="/images/2013/03/retrop_menu.jpg" rel="lightbox" title="Menu pressing ALT+F1"><img src="/images/2013/03/retrop_menu_min.jpg" width="324" height="242"></a>'
md_string = convert_html_to_md(html_string)
print(md_string)

# Python tools

## Purpose

This folder contains 3 files:

- _copy2ftp.sh_: Bash script to copy files to a ftp server. Remember to change values inside the script according to your needs.

- _mysql_json_to_markdown.py_: Code convert an exported MySQL Json file to markdown files.

- _url_link_checker.py_: Code to check if a list of urls are valid.

## Usage

Check the code and modify according to keys & variables to match your needs.

Then run the code with:

```bash
# From root of the project
time ./tools/copy2ftp.sh

# No dependencies
python3 mysql_json_to_markdown.py

python3 -m venv venv
source venv/bin/activate
pip install requests
python3 url_link_checker.py full/path/to/directory/with/markdown/files
```

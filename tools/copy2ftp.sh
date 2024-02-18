#!/bin/bash
# Copy files to FTP server
readonly ARTICLES_DIRECTORIES=$(find . -type d -regex ".*/20[0-9][0-9]$")
readonly CURRENT_YEAR=$(date +%Y)
readonly CURRENT_MONTH=$(date +%m)
readonly DIST_DIR="src/.vuepress/dist"
readonly INCREMENTAL_UPLOAD="false"
readonly FTP_HOST="ftp.example.com"
readonly FTP_USER="user"
readonly FTP_PASS="password"
readonly FTP_DIR="/public_html"
readonly FTP_PORT="21"

if [[ ! -e ./package.json ]]; then
    echo "Please run this script from the root of the project"
    exit 1
fi

function compress() {
    cd "$DIST_DIR" || exit 1

    if [[ "$INCREMENTAL_UPLOAD" == "true" ]]; then
        find . -type f -mtime -1 -exec tar -rvf ../dist.tar {} \;
    else
        tar -cvf ../dist.tar .
    fi
}

function upload() {
    ftp -n -p <<EOF
# upload the files
ftp -n -p <<EOF
open $FTP_HOST $FTP_PORT
user $FTP_USER $FTP_PASS
cd $FTP_DIR
binary
put ../dist.tar
quit
EOF
}

function cleanup() {
    rm -f dist.tar
}

function extract() {
    ftp -n -p <<EOF
# extract the files
ftp -n -p <<EOF
open $FTP_HOST $FTP_PORT
user $FTP_USER $FTP_PASS
cd $FTP_DIR
binary
get dist.tar
quit
EOF
}

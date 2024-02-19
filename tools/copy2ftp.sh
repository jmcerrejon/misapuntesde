#!/bin/bash
#
# Copy files to FTP server
#
readonly CURRENT_YEAR=$(date +%Y)
readonly CURRENT_MONTH=$(date +%m)
readonly DIST_DIR="src/.vuepress/dist"
readonly DIST_FILENAME="dist.tar.gz"
readonly INCREMENTAL_UPLOAD="true"
readonly FTP_HOST="ftp.example.com"
readonly FTP_USER="user"
readonly FTP_PASS="password"
readonly FTP_DIR="/public_html"
readonly FTP_PORT="21"

if [[ ! -e ./package.json ]]; then
    echo "Please run this script from the root of the project"
    exit 1
fi

if [[ ! -d $DIST_DIR ]]; then
    echo "Can't found directory $DIST_DIR. Building the project..."
    npm run docs:build || exit 1
fi

function clean_dist_directory() {
    echo "Cleaning dist directory..."
    # Remove unnecessary files and directories
    rm -rf "$DIST_DIR"/images/*.* "$DIST_DIR/videos" "$DIST_DIR/posts.php" "$DIST_DIR/res" "$DIST_DIR/dload_cv.html"
    # Remove all directories on images/ except the current year and month
    find "$DIST_DIR/images" -mindepth 1 -maxdepth 1 -type d -not -name "$CURRENT_YEAR" -not -name "$CURRENT_MONTH" -exec rm -rf {} \;
    echo "Done!"
}

function compress() {
    clean_dist_directory

    echo "Compress in progress..."

    if [[ "$INCREMENTAL_UPLOAD" == "true" ]]; then
        # tar all files except directories images, videos and res
        tar -czf "./$DIST_FILENAME" "$DIST_DIR"
    else
        tar -czf "./$DIST_FILENAME" .
    fi

    echo "./$DIST_FILENAME created!"
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

compress
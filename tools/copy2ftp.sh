#!/bin/bash
#
# Description: The script is pretty straightforward. It compresses the dist/ directory,
#              uploads it to the FTP server, extracts it, and cleans up.
#              The .env file is used to store the FTP credentials.
# Author     : Jose Cerrejon Gonzalez (ulysess@gmail_dot._com)
#
# shellcheck disable=SC2029
readonly CURRENT_YEAR=$(date +%Y)
readonly CURRENT_MONTH=$(date +%m)
readonly TOOLS_DIR="tools"
readonly DIST_DIR="src/.vuepress/dist"
readonly DIST_FILENAME="dist.tar.gz"
readonly INCREMENTAL_UPLOAD="true"

if [[ ! -e ./package.json ]]; then
    echo "Please run this script from the root of the project"
    exit 1
fi

if [[ ! -e $TOOLS_DIR/.env ]]; then
    echo "Can't found .env file. Please create one with FTP_HOST, FTP_USER & FTP_PASS."
    exit 1
fi

if [[ ! -d $DIST_DIR ]]; then
    echo "Can't found directory $DIST_DIR. Building the project..."
    npm run docs:build || exit 1
fi

# shellcheck source=/dev/null
source "$TOOLS_DIR/.env"

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
    cd $DIST_DIR || exit 1

    if [[ "$INCREMENTAL_UPLOAD" == "true" ]]; then
        tar -czf ../../../$DIST_FILENAME .
    else
        tar -czf ../../../$DIST_FILENAME .
    fi

    cd - || exit 1
    echo "./$DIST_FILENAME created!"
}

function upload_to_ftp() {
    if [[ ! -e $DIST_FILENAME ]]; then
        compress
    fi
    echo "Uploading to FTP server..."
    ftp ftp://"$FTP_USER:$FTP_PASS@$FTP_HOST" <<END_SCRIPT
put ./$DIST_FILENAME /$DIST_FILENAME
quit
END_SCRIPT
}

function extract_on_ftp() {
    if [[ ! -e $DIST_FILENAME ]]; then
        echo "$DIST_FILENAME does not exists. Aborting..."
        exit 1
    fi
    echo "Extracting & deleting file on FTP server..."
    ssh "$FTP_USER@$FTP_HOST" "tar -xzf $DIST_FILENAME && rm -rf $DIST_FILENAME"
    echo "Done!"
}

function cleanup() {
    read -p "Do you want to delete $DIST_FILENAME & $DIST_DIR? (y/N) " response
    if [[ $response =~ [Yy] ]]; then
        [[ -e $DIST_FILENAME ]] && rm -rf ./$DIST_FILENAME
        [[ -d $DIST_DIR ]] && rm -rf "$DIST_DIR"
    fi
}

# Smell code approaching, It's too late here. I'll refactor it later (Not promise).
if [[ -e $DIST_FILENAME ]]; then
    read -p "Do you want to delete the current $DIST_FILENAME? (Y/n) " response
    if [[ $response =~ [Yy] ]]; then
        rm -rf $DIST_FILENAME
        compress
    fi
else
    compress
fi

upload_to_ftp
extract_on_ftp
cleanup
echo "Have a nice day!"

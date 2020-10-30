#!/bin/bash

source awskeys.sh

# increment the version build ID by one
NEWVERSION=`awk '{print $0+1}' VERSION`
echo $NEWVERSION > VERSION
echo "Releasing VERSION = $NEWVERSION"

cd c1_frontend
export REACT_APP_VERSION=$NEWVERSION

# remove node_modules and rebuild it to make sure its fresh and clean and untouched
rm package-lock.json
rm -rf node_modules
npm i

npm run build

# make sure npm run build didn't fail before uploading to S3
if [ $? -eq 0 ]
then
  aws s3 rm s3://beta.corrosionone.com/ --recursive
  aws s3 cp --recursive --acl public-read build/. s3://beta.corrosionone.com/
  # overwrite index.html with a file that has cache-control 0
  aws s3 cp --acl public-read --cache-control max-age=0 build/index.html s3://beta.corrosionone.com/
else
  echo "Not uploading to S3.... bad exit code from npm run build"
fi

aws cloudfront create-invalidation --distribution-id "E2RFSO1SANJILL" --paths "/*"

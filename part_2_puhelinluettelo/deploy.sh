#!/bin/sh
npm run build
rm -rf ../../part3_fs/build
cp -r build ../../part3_fs/


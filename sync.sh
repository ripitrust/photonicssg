#!/bin/bash
aws s3 sync . s3://photonics2017vr.willnix.me/ --exclude=".git/*" --exclude="*.pid" --exclude="*.sh" --exclude=".gitignore" --exclude=".DS_Store"

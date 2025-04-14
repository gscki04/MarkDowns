#!/bin/bash

timestamp=$(date +"%d-%m-%Y %I:%M%p")

git add .
git commit -m "$timestamp"
git push origin main


# chmod +x gitpush.sh

#!/bin/bash

timestamp=$(date +"%d-%m-%Y %I:%M%p")

git add .
git commit -m "$timestamp: Product CRUD simple full stack done"
git push origin main


# chmod +x gitpush.sh

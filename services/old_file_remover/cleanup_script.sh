#!/bin/bash

folder_path="/app/files"

while true; do
  echo "Starting the folder and file deletion process."

  # Find directories older than 4 hours (240 minutes)
  find "$folder_path" -type d -mmin +240 -exec rm -rf {} \;

  echo "Deletion process complete. Sleeping for 4 hours."
  sleep 14400
done

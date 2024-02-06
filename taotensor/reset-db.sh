#!/bin/bash

mode="prod"  # Default mode

# Check if --dev option is provided
if [[ $1 == "--dev" ]]; then
  mode="dev"
fi

# Log the mode
echo "Running in $mode mode."

# Confirmation prompt
read -p "Are you sure? This will delete the current database and will take multiple hours to re-ingest. (y/n) " -n 1 -r
echo    # Move to a new line
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    exit 1
fi

set -e

if [[ $mode != "dev" ]]; then
  git pull
fi

cd squid
npm run codegen
npm run build

# Stop squid services
cd ..
docker compose -f docker-compose.squid.yml down

# Remove all db data
cd squid
sudo rm -rf squid_db

# Restart the db service only
cd ..
docker compose -f docker-compose.squid.yml up -d --build --force-recreate db

# Apply db schema (from migration files)
echo "Waiting 10 seconds for db to start before attempting to apply migration"
sleep 10
cd squid
npm run db:apply

# Start Processor & Gateway (skipped in --dev mode)
if [[ $mode != "dev" ]]; then
  cd ..
  docker compose -f docker-compose.squid.yml up --build --force-recreate -d processor query-node
fi

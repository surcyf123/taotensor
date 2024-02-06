#!/bin/bash

# Get the absolute path of the current script
SCRIPT_PATH="$(dirname "$(realpath "$0")")"

# Specify the absolute path to your Dockerfile
DOCKERFILE_PATH="${SCRIPT_PATH}/../Dockerfile"

# Specify the path to your docker build context directory (parent directory in this case)
BUILD_CONTEXT="${SCRIPT_PATH}/../"

# Specify the name of the Docker image
IMAGE_NAME="squid_migration:latest"

# Specify the network name
NETWORK_NAME="taotensor"

# Build the Docker image
docker build -t "${IMAGE_NAME}" -f "${DOCKERFILE_PATH}" "${BUILD_CONTEXT}"

# Run the migrations
docker run --rm -it --network "${NETWORK_NAME}" --name migration-runner \
    -e DB_USER=postgres \
    -e DB_PASS=postgres \
    -e DB_NAME=squid \
    -e DB_HOST=db \
    -e DB_PORT=5432 \
    -e PROCESSOR_PROMETHEUS_PORT=3000 \
    "${IMAGE_NAME}" npm run db:apply
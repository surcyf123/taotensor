# Use an official Python runtime as a parent image
FROM python:3.10

# Define a build argument for the hypercorn options
ARG AUTO_RELOAD=false

# Install system level dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    g++ \
    libffi-dev \
    libssl-dev \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Create a working directory
WORKDIR /app/backend

# Copy requirements.txt to the docker container
COPY requirements.txt .

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install numpy --upgrade


WORKDIR /app

# Use the build argument in the command
CMD if [ "$AUTO_RELOAD" = "true" ] ; then \
    hypercorn backend.main:app --bind=0.0.0.0:8000 --reload ; \
else \
    hypercorn backend.main:app --bind=0.0.0.0:8000 ; \
fi

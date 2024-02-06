conda activate bittensor

uvicorn backend/main:app --reload

fold radar upset need use series trumpet dove enroll coffee pact improve

hypercorn backend/main:app --reload

# Traefik Setup

Create letsencrypt folder inside the project folder with correct permissions.

```
mkdir -p ./letsencrypt/acme/
touch ./letsencrypt/acme/acme.json
chmod 600 ./letsencrypt/acme/acme.json
```

# Run

** Traefik Reverse proxy for https **
`docker compose -f docker-compose.traefik.yml up`
** Python API **
`docker compose -f docker-compose.backend.yml up`
** Archive: DB, Ingest, Gateway & Explorer **
`docker compose -f docker-compose.squid-archive.yml up`
** DB for Subsquid **
`docker compose -f docker-compose.subsquid-db.yml up`

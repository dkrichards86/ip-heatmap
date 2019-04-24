#/usr/bin/bash

POSTGRES_TAG=9.6.12
PYTHON_GIS_TAG=1.0.0

echo "Building PostgreSQL image with PostGIS."
docker build -t postgres-gis:$POSTGRES_TAG -f Dockerfile.postgresgis .

echo "Building Python image with GIS binaries. This will take some time."
docker build -t python-gis:$PYTHON_GIS_TAG -f Dockerfile.pythongis .

echo "Building service specific images."
docker-compose build
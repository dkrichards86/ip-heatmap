# Explore IPv4 Locations
This application allows users to pan and zoom to explorer IPv4 hotspots around
the world. The map displays most frequent points (latitude and longitude pairs)
of IP addresses within the bounds of the map.

Service specific information can be found in the [Frontend](./client/README.md)
and [Backend](./server/README.md) READMEs.

## Getting started
This assumes Docker (and Docker Compose) are installed.

### Building Base Images
First, build the base images. These images include binaries and GIS specific
dependencies required by the webserver. These can be done the easy way, or the
hard way.

#### The Easy Way
Run `./bin/build_base_images.sh`. Voila.

#### The Hard Way
To build the PostgreSQL base image with PostGIS installed, run:  `docker build -t postgres-gis:<tag> -f Dockerfile.postgresgis .`

To build the Python base image with GEOS, Proj.4 and GDAL installed, run: `docker build -t python-gis:<tag> -f Dockerfile.pythongis .`

**Note:** The GIS binaries take a while to install (~1 hour).

Finally, run `docker-compose build` to build service specific images.

### Seeding the Database
Once all containers are built, you will need to seed the database with IP address
information. This too can be done the easy way or the hard way.

#### Easy
Run `./bin/seed_app.sh`

#### Hard
To seed the database with IP addresses and coordinates, run: `docker-compose run --rm backend bash -c './manage.py seed'`

Once seeded, you will also need to sync materialized views. To do so, run: `./manage.py sync_pgviews --force`

## Running Locally
Once base images are built, run the containers in development mode.
`docker-compose up`

This launches a webserver at `http://localhost:8080` and a frontend with hot reloading
at `http://localhost:3000`.

## Testing
Both frontend and backend services include a (minimal) test suite. Again, easy hard...

#### Easy
Run `./bin/test_app.sh`

#### Hard
To run backend tests: `docker-compose run --rm backend bash -c "flake8 . && python wait_for_postgres.py && ./manage.py test"`

To run frontend tests: `docker-compose run --rm frontend bash -c "npm run test"`

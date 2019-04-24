#/usr/bin/bash

echo "Seeding the database"
docker-compose run --rm backend bash -c './manage.py seed'

echo "Syncing Materialzed Views"
docker-compose run --rm backend bash -c './manage.py sync_pgviews --force'
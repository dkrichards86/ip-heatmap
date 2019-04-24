#/usr/bin/bash

echo "Testing backend"
docker-compose run --rm backend bash -c "flake8 . && python wait_for_postgres.py && ./manage.py test"

echo "Testing frontend"
docker-compose run --rm frontend bash -c "CI=true npm run test -- --coverage"
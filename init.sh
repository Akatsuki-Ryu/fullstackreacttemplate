find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
npm run fullprep
docker-compose build
docker-compose run
# clear compose instance
docker-compose rm -f

# pull latest images
docker-compose pull

# force container build
docker-compose build --no-cache --force-rm

# launch containers
#docker-compose up -d
echo "Removing database"
docker rm -f mysql

echo "Removing application"
docker rm -f web

echo "Removing Nginx"
docker rm -f nginx

echo "Removing network"
docker network rm  pfa

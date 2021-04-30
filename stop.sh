echo "Stoping database"
docker stop  mysql

echo "Stoping application"
docker stop  web

echo "Stoping Nginx"
docker stop  nginx

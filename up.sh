
docker network create pfa

docker run --network pfa --name mysql -p3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:5.7

# loop just for wait mysql be ready to receive connections
until docker exec -i mysql mysql -uroot -p"my-secret-pw" -e "show databases"
do
  echo "this loop will try again until mysql container be ready... It can take 1 or 2 minutes"
  echo "waiting 20 seconds to try again..."
  sleep 20
done

docker exec -i mysql sh -c 'exec mysql -uroot -p"my-secret-pw"' < ./database/init.sql

echo "Creating app"
docker build -t quarkus-api ./app
docker run --network pfa --name=web -d quarkus-api

echo "App starting..."
sleep 20

echo "Creating Nginx"
docker build -t nginx ./nginx
docker run --network pfa --name=nginx -d -p 8080:80 nginx


echo "everything is up, nginx is listenning on port 8080"

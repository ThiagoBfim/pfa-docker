## PFA (Programa Full Cycle de Aceleração) Project 

This project is a aceleration bonus course for Full Cycle Developer course. 


## About application

* This application have a Database with Mysql.
* API with Quarkus
* Front-end with Angular


## Running the application

` docker compose up `

After docker build, just open your browser in url: http://localhost:8080


For use without docker compose, execute the following steps:


`docker network create --driver nat pfa `\
`docker run --network pfa --name mysql -p3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:5.7 `\
`docker exec -i mysql sh -c 'exec mysql -uroot -p"my-secret-pw"' < ./database/init.sql `

`docker build -t quarkus-api ./app `\
`docker run --network pfa --name=web  -d quarkus-api ` 
 
`docker build -t nginx ./nginx `\
`docker run --network pfa --name=nginx -d -p 8080:80 nginx `



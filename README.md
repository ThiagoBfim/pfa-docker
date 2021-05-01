## PFA (Programa Full Cycle de Aceleração) Project

This project is a aceleration bonus course for Full Cycle Developer course.

## About application

* This application use Mysql Database.
* API with Quarkus
* Front-end with Angular

<p align="center">
  <img align="center" src="/images/system.png" width="800" border="0">
</p>

## Running the application with Compose

` docker-compose up `

After docker build, just open your browser in url: http://localhost:8000

### Rollback

```
     docker-compose down
     rm -rf dbdata/
```

## Running the application without Compose

For use without docker compose, execute the following steps:

```
    git clone https://github.com/ThiagoBfim/pfa-docker
    cd pfa-docker
    ./up.sh
```

Now you can open http://localhost:8080

### Rollback

Run `./rollback.sh` to remove all containers and network.

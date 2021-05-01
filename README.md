
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

<b>Start:</b>

` docker-compose up `

After docker build, just open your browser in url: http://localhost:8000


<b>Rollback:</b>

```
     docker-compose down
     rm -rf dbdata/
```

## Running the application without Compose

For use without docker compose, execute the following steps:

<b>Start:</b>

```
    git clone https://github.com/ThiagoBfim/pfa-docker
    cd pfa-docker
    ./up.sh
```

Now you can open http://localhost:8080

<b>Rollback:</b>

Run `./rollback.sh` to remove all containers and network.

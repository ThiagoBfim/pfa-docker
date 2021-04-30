# Quarkus with Angular

This project uses Quarkus, the Supersonic Subatomic Java Framework, which
offers multiple advantages over traditional Java runtimes, including:

1. Built-in support for containers like Docker;
1. Fast application startup time;
1. Low memory consumption;
1. Fast response times;
1. Out-of-the-box support for standard Java technologies - JAX RS, JPA, and
so on;
1. Live reload of code during development, doing away with the need for
repeated, time-consuming application restarts;
1. Native executable generation using GraalVM.

All in all, Quarkus builds upon all the benefits of the JVM and makes Java
applications first-class citizens in a containerized environment, in turn
making it straightforward to adopt modern architectural patterns like
microservices.

To learn more about Quarkus, please visit its website: https://quarkus.io/.

This application provides a REST API built using Quarkus, and a frontend built
using Angular.

## Running the application in dev mode

You can run your application in dev mode that enables live coding using:
```
mvn quarkus:dev
```

The backend should then be available on http://localhost:8080. You can quickly
test whether the application has started correctly by opening
http://localhost:8080/ in a web browser and ensuring that the message
_hello_ gets displayed in the browser window.

When run in the dev mode, the Angular application is not bundled with the
Java application. You can run the Angular application using:

```
ng serve
```

The Angular application should then be available on http://localhost:4200.

## Packaging and running the application

The application can be packaged using `ng build --prod` to generate the static resources, 
and than `mvn package`.
It produces the `quarkus-angular-1.0-SNAPSHOT-runner.jar` file in the `/target`
directory. This is a uber-jar with the dependencies, so it can be deployed.

The application is now runnable using:
```
java -jar target/quarkus-angular-1.0-SNAPSHOT-runner.jar
```

## Docker image

After packaging, you can create a docker image with this command:

`docker build -f src/main/docker/Dockerfile.native -t quarkus/portfolio .`

FROM adoptopenjdk/openjdk14

COPY quarkus-angular-1.0.0-runner.jar quarkus-angular-1.0.0-runner.jar
EXPOSE 8080

CMD ["java","-DHOST=mysql", "-jar", "quarkus-angular-1.0.0-runner.jar", "-Dquarkus.http.host=0.0.0.0"]

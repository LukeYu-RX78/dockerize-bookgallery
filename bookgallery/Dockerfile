FROM maven:3.8.4-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src/
RUN mvn clean install

FROM openjdk:17
VOLUME /tmp
WORKDIR /app
COPY --from=build /app/target/bookgallery-0.0.1-SNAPSHOT.jar /app/bookgallery.jar
ENTRYPOINT ["java", "-jar", "/app/bookgallery.jar"]

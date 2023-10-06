# dockerize-bookgallery  
Dockerize the whole book gallery project including frontend and  backend with Dockerfile and the docker compose file

The folder struct of the whole project:  
```
--backend
----Dockerfile
----  |  
--frontend
----Dockerfile  
----dockerignore
----  |
--bookgallery-compose.yaml  
```

Make some configuration modifications with backend `application.properties` file:
```
spring.jpa.hibernate.ddl-auto=update
#using `docker inspect '${database_id}' | grep 'IPAddress'` find the real ip in docker to replace the `localhost`
#also adding the allowPublicKeyRetrieval and useSSL for jdbc connection
spring.datasource.url=jdbc:mysql://172.18.0.2:3306/bookgallery?allowPublicKeyRetrieval=true&useSSL=false&createDatabaseIfNotExist=true
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.database=mysql
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5InnoDBDialect
```

##dockerize while project:  

![2301696513159_ pic](https://github.com/LukeYu-RX78/dockerize-bookgallery/assets/116868785/38f4fa30-173d-48ad-9f80-fc8f8eb61330)  
![2281696512721_ pic](https://github.com/LukeYu-RX78/dockerize-bookgallery/assets/116868785/e64ca8c7-84e6-416f-8af5-5aed79d7c734)  
![2311696513383_ pic](https://github.com/LukeYu-RX78/dockerize-bookgallery/assets/116868785/c6037b97-e452-4303-8ca7-76b3bf94481a)  
![2321696513400_ pic](https://github.com/LukeYu-RX78/dockerize-bookgallery/assets/116868785/a7b79484-76f0-4dc4-93fa-7e0af20fb0c4) 
![2331696514619_ pic](https://github.com/LukeYu-RX78/dockerize-bookgallery/assets/116868785/06cae9ed-ef6f-4930-8d30-86738fae3008)  

##meet some problem  
I have tested the database, backend, and frontend and all of them run well separately   
![2111696487462_ pic](https://github.com/LukeYu-RX78/dockerize-bookgallery/assets/116868785/2d65f330-099c-4693-bbd5-0811d56ad612)  

When I used the fetch method to request the backend I couldn't get the expected data, like this:  
![2341696516681_ pic](https://github.com/LukeYu-RX78/dockerize-bookgallery/assets/116868785/4a1d73b2-d831-4e85-a554-fd52ab49c9e0)  

because I changed the `local` host to a static ipv4 address, but this IP address is dynamic and always changing in the range.  
So I am trying to make the IP fixed now. 😭😭😭


  


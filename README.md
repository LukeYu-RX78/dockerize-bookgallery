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

## dockerize the whole project:  
### backend preparing:
After clone the entire project, open the maven backend project with ide <sub>(I use IntelliJ here)</sub>  
use the Maven tool of IDE to generate the jar of the backend project:  
![WeChatfebf1c9bd4c6e5cbc296fb2313e1315c](https://github.com/LukeYu-RX78/dockerize-bookgallery/assets/116868785/2bd2a71a-38bd-49c6-860c-8d69eb864e40)  

### frontend preparing:
open the terminal under the frontend directory `bookgallery-web`, run `npm update` then run `npm install` to make sure all the dependence library in  
the project `nood_modules`:  
![WeChat45b59c3e3c8c54606b0252fa31fe0c7c](https://github.com/LukeYu-RX78/dockerize-bookgallery/assets/116868785/2a825830-2046-460e-8616-09ab56add04f)  

### dockerizing:
Make the docker is already run, then go to the whole project directory which has the compose file `bookgallery-compose.ymal`:  
run `docker-compose -f bookgallery-compose.yaml up`:  
![WeChat45b59c3e3c8c54606b0252fa31fe0c7c](https://github.com/LukeYu-RX78/dockerize-bookgallery/assets/116868785/694aa074-6750-40fe-9f2f-db40c72b4663)  
![WeChat29b9a7bdfe078f6176db15bf92378dfe](https://github.com/LukeYu-RX78/dockerize-bookgallery/assets/116868785/747dacfd-2523-4f03-a88d-715c47e9557e)  

so if we open `localhost:8888`, we can check our database on server:  
![image](https://github.com/LukeYu-RX78/dockerize-bookgallery/assets/116868785/af2d9308-cfe4-4d46-b7a5-ebe4ac15fbd9)


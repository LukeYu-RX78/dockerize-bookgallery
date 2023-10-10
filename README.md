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
open the terminal under the frontend directory `bookgallery-web`, run `npm update` then run `npm install` to make sure all the library dependences in  
the project `nood_modules`:  
![WeChat45b59c3e3c8c54606b0252fa31fe0c7c](https://github.com/LukeYu-RX78/dockerize-bookgallery/assets/116868785/2a825830-2046-460e-8616-09ab56add04f)  

### dockerizing:
Make the docker is already run, then go to the whole project directory which has the compose file `bookgallery-compose.ymal`:  
run `docker-compose -f bookgallery-compose.yaml up`:  
![WeChat06c6d11a05ccae420d99845bd6235fc3](https://github.com/LukeYu-RX78/dockerize-bookgallery/assets/116868785/847b67fa-1dfa-4176-8bdf-242e40ab9fe3)  
![WeChat29b9a7bdfe078f6176db15bf92378dfe](https://github.com/LukeYu-RX78/dockerize-bookgallery/assets/116868785/747dacfd-2523-4f03-a88d-715c47e9557e)  

so if we open `localhost:8888`, we can check our database on the server:  
![image](https://github.com/LukeYu-RX78/dockerize-bookgallery/assets/116868785/af2d9308-cfe4-4d46-b7a5-ebe4ac15fbd9)  
<sub>different with the back end `bookgallery` repo, I add the password `root` in the configuration because the adminer I have used is not supporting empty password</sub>  
![WeChateee6ad00e182e588b8b32fb77cbe0cf7](https://github.com/LukeYu-RX78/dockerize-bookgallery/assets/116868785/e774065f-c5c6-4c7b-8fd7-377798f2c835)  

If the database is also created with the data we need, just open `localhost:3000`, then we can see the whole project is running well:
![WeChat047f292f90578668968c6237b06210d6](https://github.com/LukeYu-RX78/dockerize-bookgallery/assets/116868785/8f8a0326-3cd5-4809-9ca6-ff92d25e3c14)  

Ofcause we can also use Postman to send the HTTP request to test the backend APIs:
<img width="955" alt="image" src="https://github.com/LukeYu-RX78/dockerize-bookgallery/assets/116868785/7753d545-1274-4f84-9dca-66c0db4bab64">  
<sub>the content in web page would also change if the database is successfully update by calling the APIs with Postman<sub/>

Let's back to the terminal and check the container and all the images that I created:
![WeChat124c0989a03f770b9bf077f0b5ac84c3](https://github.com/LukeYu-RX78/dockerize-bookgallery/assets/116868785/88330a09-bc23-4d24-8786-7b4368f5967a)  
<sub>Which also can be seem in docker desktop<sub/>
![WeChatf45f58a4fab29010a31815eda792c3bc](https://github.com/LukeYu-RX78/dockerize-bookgallery/assets/116868785/b98019a5-2482-45bc-b67b-edd6161f25e1)  
![WeChateb1ccb13fbaa68786cd1abb5f4adf5d0](https://github.com/LukeYu-RX78/dockerize-bookgallery/assets/116868785/11dcb5c8-c716-40d8-8c4a-804a661aef3b)  








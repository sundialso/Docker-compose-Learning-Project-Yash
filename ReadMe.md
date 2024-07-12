# How to configure

## Step 1: Create a mongodb container 
```
docker run -d --name newMongodb --network New-Node-App -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password -p 27017:27017 mongo
```
## Step 2: create a mongo-express container and connect to MongoDB
```
docker run -d -p 8081:8081 -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password --net New-Node-App --name New-mongoexpress -e ME_CONFIG_MONGODB_SERVER=newMongodb  mongo-express
```

## Step 3: Start the node server 

```
node server.js
```

### Then go to https://localhost:3002

To check the database go to https://localhost:8081 in the database 'new'.# Docker-composite-and-Kubernetes-Learning-Projects

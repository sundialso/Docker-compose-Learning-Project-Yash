# How to configure(These steps are specifically to use the app with docker compose)

## Step 1: Run the command  
```
docker-compose -f docker-compose.yaml up      
```
### The mongo database, mongo-express and the backend application will start

## Step 2: To access the website go to 
```
https://localhost:3002
```

## Step 3: To access the mongo-express go to 
```
https://localhost:8081
```
#### Make sure the port numbers 27017, 8081 and 3002 are not used by any other service.


# How to configure(These steps are specifically to use the app with kubernetes)

## Step 1: Start the minikube container
```
minikube start 
```
This command will run a minikube container on docker

## Step 2: deploy all the deployments and services 
```
kubectl apply -f mongo.yaml
kubectl apply -f mongo-express.yaml
kubectl apply -f nodeapp.yaml
```

## Step 3: Start the service using 
```
minikube service nodeapp-service
```

As of now the database can not be accessed externally since its services are internal services, only the service nodeapp-service is external.
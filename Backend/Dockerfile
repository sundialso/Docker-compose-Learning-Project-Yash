FROM node:22-alpine3.19


COPY . /app
WORKDIR /app/Backend/

RUN npm install
COPY . /app
EXPOSE 3002
#CMD ["sleep", "10000000"]
CMD ["node", "server.js"]
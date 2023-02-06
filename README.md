# WebSocket server with Kafka

This is a WebSocket server that can interact with different microservices in an existing platform. The idea of the WebSocket server is to receive messages from various microservices and publish them through the WebSocket channel. The various microservices and WebSocket server communication is implemented with Apache Kafka. There
is one topic where different microservices can produce messages that are later sent through the WebSocket channel. There is a public WebSocket API where clients can subscribe and receive WebSocket notifications.
![alt text](./diagram.png?raw=true "Diagram")

## Prerequisites
You should have Kafka installed on your machine. For your comfort a docker-compose.yaml file is provided, which you can run by
```
$ docker-compose up -d
```

## Initialization
Clone the repository. Install the necessary modules via command

```bash
$ npm i
```
Copy .env.example to a .env file. Then run the project via
```bash 
$ npm start
```

## Testing
An end-to-end test is implemented. To run it, make sure the app is running, then in a separate terminal window run
```bash
$ npm test
``` 

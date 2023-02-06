const configs = {
  WEBSOCKET_PORT: Number(process.env.WEBSOCKET_PORT) || 3001,
  BROKER: process.env.BROKER || 'localhost:9092',
  KAFKA_CLIENT_ID: process.env.KAFKA_CLIENT_ID || 'wss-client',
  KAFKA_CONSUMER_GROUP_ID: process.env.KAFKA_CONSUMER_GROUP_ID || 'event-consumer'
};

export default configs;
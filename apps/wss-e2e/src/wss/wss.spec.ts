import { io } from 'socket.io-client';
import { Kafka } from 'kafkajs';
import { KafkaTopics, SocketEvents } from '@websocket-server/common/types/events';
import configs from '@websocket-server/common/configs'

describe('Websocket Server with Kafka', () => {
  jest.setTimeout(60000);
  const kafka = new Kafka({
    clientId: configs.KAFKA_CLIENT_ID,
    brokers: [configs.BROKER],
  });
  const producer = kafka.producer();
  const socket = io(`http://localhost:${configs.WEBSOCKET_PORT}`);

  beforeAll(async () => {
    await producer.connect();
    await new Promise((res) => socket.on('connect', () => res(true)));
  })

  it('A producers should send an event and a socket should get it', async () => {
    const event = {
      value: JSON.stringify({
        id: 1,
        name: 'testevent'
      })
    };
    await producer.send({
      topic: KafkaTopics.kafkaTopic,
      messages: [event],
    });
    const data = await new Promise((res, rej) => {
      socket.on(SocketEvents.socketEvent, (data) => {
        return res(data);
      });
    })
    expect(data).toMatchObject(JSON.parse(event.value));
  });

  afterAll(async () => {
    await producer.disconnect();
    socket.disconnect();
  });
});
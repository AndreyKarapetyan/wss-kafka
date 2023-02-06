export enum KafkaTopics {
  kafkaTopic = 'kafkaTopic'
}

export enum SocketEvents {
  socketEvent = 'socketEvent'
}

export const KafkaToSocketMapping = {
  [KafkaTopics.kafkaTopic]: SocketEvents.socketEvent
}
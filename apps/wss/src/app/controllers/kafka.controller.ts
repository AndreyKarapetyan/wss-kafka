import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { SocketService } from '@websocket-server/socket/socket.service';
import { KafkaTopics, KafkaToSocketMapping, SocketEvents } from '@websocket-server/common/types/events';

@Controller()
export class KafkaController {
  constructor(private readonly socketService: SocketService) { }

  @EventPattern(KafkaTopics.kafkaTopic)
  handleUserCreate(@Payload() data: any) {
    const socketEvent = KafkaToSocketMapping[KafkaTopics.kafkaTopic];
    this.socketService.publish(socketEvent, data);
  }
}

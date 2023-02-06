import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { SocketEvents } from '@websocket-server/common/types/events';
import configs from '@websocket-server/common/configs'

@WebSocketGateway(configs.WEBSOCKET_PORT, {
  cors: {
    origin: '*'
  }
})
export class SocketService {
  @WebSocketServer()
  server: Server;

  publish(eventName: SocketEvents, data: any): void {
    this.server.emit(eventName, data);
  }
}
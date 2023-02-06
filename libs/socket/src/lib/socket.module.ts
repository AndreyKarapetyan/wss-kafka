import { Module } from '@nestjs/common';
import { SocketService } from './socket.service';
import { CommonModule } from '@websocket-server/common/common.module';

@Module({
  imports: [CommonModule],
  providers: [SocketService],
  exports: [SocketService],
})
export class SocketModule {}

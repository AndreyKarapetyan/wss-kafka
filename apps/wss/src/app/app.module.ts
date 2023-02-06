import { KafkaController } from './controllers/kafka.controller';
import { CommonModule } from '@websocket-server/common/common.module';
import { Module } from '@nestjs/common';
import { SocketModule } from '@websocket-server/socket/socket.module';

@Module({
  imports: [SocketModule, CommonModule],
  controllers: [KafkaController],
  providers: [],
})
export class AppModule { }

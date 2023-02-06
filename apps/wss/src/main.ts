import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app/app.module';
import { KafkaLoggingInterceptor } from './app/interceptors/kafka-logger';
import configs from '@websocket-server/common/configs'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: configs.KAFKA_CLIENT_ID,
          brokers: [configs.BROKER],
          connectionTimeout: 3000,
        },
        consumer: {
          groupId: configs.KAFKA_CONSUMER_GROUP_ID,
        },
      },
    }
  );
  app.useGlobalInterceptors(new KafkaLoggingInterceptor())
  app.listen();
}

bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from 'nestjs-prisma';
import { join } from 'path';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // enable shutdown hook
  // const prismaService: PrismaService = app.get(PrismaService);
  // prismaService.enableShutdownHooks(app);
  const grpcApp = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: ['account'],
        protoPath: [
          join(__dirname, 'proto/account.proto'),
          // join(__dirname, 'proto/tweet.proto'),
          // join(__dirname, 'proto/category.proto'),
          // join(__dirname, 'proto/common.proto'),
        ],
      },
    },
  );
  const prismaService: PrismaService = app.get(PrismaService);
  // @ts-ignore
  prismaService.enableShutdownHooks(grpcApp);
  await grpcApp.listen();
  await app.listen(3000);
}

bootstrap();

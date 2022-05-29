import { Module } from '@nestjs/common';
import { AccountRpcService } from './accounts.service';
import { AccountsResolver } from './accounts.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'account',
        transport: Transport.GRPC,
        options: {
          package: 'account',
          protoPath: join(__dirname, '../../proto/account.proto'),
        },
      },
    ]),
  ],
  providers: [AccountsResolver, AccountRpcService],
})
export class AccountsModule {}

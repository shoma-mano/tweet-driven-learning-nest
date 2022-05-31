import { Test, TestingModule } from '@nestjs/testing';
import { AccountRpcService } from './accounts.service';
import { lastValueFrom } from 'rxjs';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

describe('AccountRpcService', () => {
  let service: AccountRpcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ClientsModule.register([
          {
            name: 'account',
            transport: Transport.GRPC,
            options: {
              url: 'localhost:50051',
              package: 'account',
              protoPath: join(__dirname, '../../proto/account.proto'),
            },
          },
        ]),
      ],
      providers: [AccountRpcService],
    }).compile();

    service = module.get<AccountRpcService>(AccountRpcService);
    service.onModuleInit();
  });

  it('findOne', async () => {
    const result = await service.findOne('0');
    expect(service).toBeDefined();
    console.log(result);
  });

  it('createOne', async () => {
    const sub = service.create({
      UID: 'testnest',
      Bio: 'Test',
      Name: 'test',
    });
    const result = await lastValueFrom(sub);
    expect(result.AffectedRows['low']).toBe(1);
  });
});

import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { UpdateAccountInput } from './dto/update-account.input';
import { ClientGrpc } from '@nestjs/microservices';
import { AccountService } from '../../proto/account.interface';


@Injectable()
export class AccountRpcService implements OnModuleInit {
  private accountService: AccountService;

  constructor(@Inject('account') private client: ClientGrpc) {
  }

  onModuleInit() {
    this.accountService = this.client.getService('AccountService');
  }

  create(createAccountInput: any) {
    return this.accountService.createAccount({
      UID: 'testnest',
      Bio: 'Test',
      Name: 'test',
    });
  }

  findAll() {
    return `This action returns all accounts`;
  }

  async findOne(uid: string) {
    const result = await this.accountService
      .findOneByUid({ UID: '1' })
      .toPromise();
    return result;
  }

  update(id: number, updateAccountInput: UpdateAccountInput) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}

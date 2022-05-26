import { Injectable } from '@nestjs/common';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';
import { Account } from './entities/accounts.model';

@Injectable()
export class AccountsService {
  create(createAccountInput: CreateAccountInput) {
    return 'This action adds a new account';
  }

  findAll() {
    return `This action returns all accounts`;
  }

  findOne(id: number): Account {
    return {
      id: 1,
      categories: [],
      bio: 'test',
      uid: 'test1',
      name: 'test',
    };
  }

  update(id: number, updateAccountInput: UpdateAccountInput) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}

import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AccountRpcService } from './accounts.service';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';
import { Account } from './entities/accounts.model';

@Resolver(() => Account)
export class AccountsResolver {
  constructor(private readonly accountsService: AccountRpcService) {}

  @Mutation(() => Account)
  createAccount(
    @Args('createAccountInput') createAccountInput: CreateAccountInput,
  ) {
    return this.accountsService.create(createAccountInput);
  }

  @Query(() => [Account], { name: 'accounts' })
  findAll() {
    return this.accountsService.findAll();
  }

  @Query(() => Account, { name: 'account' })
  findOne(@Args('uid', { type: () => Int }) uid: string) {
    return this.accountsService.findOne(uid);
  }

  @Mutation(() => Account)
  updateAccount(
    @Args('updateAccountInput') updateAccountInput: UpdateAccountInput,
  ) {
    return this.accountsService.update(
      updateAccountInput.id,
      updateAccountInput,
    );
  }

  @Mutation(() => Account)
  removeAccount(@Args('id', { type: () => Int }) id: number) {
    return this.accountsService.remove(id);
  }
}

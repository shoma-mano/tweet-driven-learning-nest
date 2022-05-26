import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Account } from 'src/modules/accounts/entities/accounts.model';

@ObjectType()
export class Category {
  @Field(() => ID, { nullable: false })
  id!: bigint;

  @Field(() => String, { nullable: false })
  account_id!: bigint;

  @Field(() => String, { nullable: true })
  content!: string | null;

  @Field(() => Account, { nullable: false })
  accounts?: Account;
}

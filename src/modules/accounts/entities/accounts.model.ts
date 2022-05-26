import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { AccountsCount } from './accounts-count.output';
import { Category } from '../../categories/entities/category.entity';

@ObjectType()
export class Account {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  uid!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  bio!: string | null;

  @Field(() => [Category], { nullable: true })
  categories?: Array<Category>;

  @Field(() => AccountsCount, { nullable: false })
  _count?: AccountsCount;
}

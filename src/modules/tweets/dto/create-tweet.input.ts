import { InputType, Int, Field } from '@nestjs/graphql';
import { accounts } from 'src/@generated/prisma-nestjs-graphql/accounts/accounts.model';
import { categories } from 'src/@generated/prisma-nestjs-graphql/categories/categories.model';
import { CreateCategoryInput } from '../../categories/dto/create-category.input';

@InputType()
export class CreateTweetInput {
  @Field(() => Int, { nullable: false })
  account_id: bigint;

  @Field(() => String, { nullable: true })
  Content?: string;

  @Field(() => [CreateCategoryInput], { nullable: true })
  categories?: Array<CreateCategoryInput>;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field(() => ID, { nullable: false })
  id!: bigint;

  @Field(() => String, { nullable: true })
  content!: string | null;
}

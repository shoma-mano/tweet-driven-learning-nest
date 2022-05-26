import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AccountsCount {

    @Field(() => Int, {nullable:false})
    categories!: number;
}

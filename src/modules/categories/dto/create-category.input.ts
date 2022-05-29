import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name?: string;
}

import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class AffectedRow {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  affectedRow: number;
}

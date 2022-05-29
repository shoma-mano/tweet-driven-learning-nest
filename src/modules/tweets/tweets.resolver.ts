import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TweetsService } from './tweets.service';
import { Tweet } from './entities/tweet.entity';
import { CreateTweetInput } from './dto/create-tweet.input';
import { AffectedRow } from '../../type/class/affected-row';

@Resolver(() => Tweet)
export class TweetsResolver {
  constructor(private readonly tweetsService: TweetsService) {}

  @Mutation(() => AffectedRow)
  createTweet(@Args('createTweetInput') createTweetInput: CreateTweetInput) {
    return this.tweetsService.create(createTweetInput);
  }

  @Query(() => [Tweet], { name: 'tweets' })
  findAll() {
    return this.tweetsService.findAll();
  }

  @Query(() => Tweet, { name: 'tweet' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tweetsService.findOne(id);
  }

  // @Mutation(() => Tweet)
  // updateTweet(@Args('updateTweetInput') updateTweetInput: UpdateTweetInput) {
  //   return this.tweetsService.update(updateTweetInput.id, updateTweetInput);
  // }

  @Mutation(() => Tweet)
  removeTweet(@Args('id', { type: () => Int }) id: number) {
    return this.tweetsService.remove(id);
  }
}

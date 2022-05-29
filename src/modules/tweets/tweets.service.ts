import { Injectable } from '@nestjs/common';
import { CreateTweetInput } from './dto/create-tweet.input';
import { UpdateTweetInput } from './dto/update-tweet.input';
import { AffectedRow } from '../../type/class/affected-row';

@Injectable()
export class TweetsService {
  create(createTweetInput: CreateTweetInput): AffectedRow {
    return { affectedRow: 3 };
  }

  findAll() {
    return `This action returns all tweets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tweet`;
  }

  update(id: number, updateTweetInput: UpdateTweetInput) {
    return `This action updates a #${id} tweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweet`;
  }
}

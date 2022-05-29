import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'nestjs-prisma';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AccountsModule } from './modules/accounts/accounts.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { TweetsModule } from './modules/tweets/tweets.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: './src/schema.graphql',
    }),
    PrismaModule.forRoot({ isGlobal: true }),
    AccountsModule,
    CategoriesModule,
    TweetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

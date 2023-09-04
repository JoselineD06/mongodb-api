import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      // `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}.7sb7q0s.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`
      `mongodb://${process.env.MONGODB_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}.railway.app:6438/${process.env.MONGODB_DATABASE}?authSource=admin`,
      ), 
      TodoModule,
    ],
  controllers: [AppController],

  providers: [AppService],
})
export class AppModule { }


import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { schemas } from './db/schema';
import { BackendModules } from './backend/module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/eCommerce'),
    MongooseModule.forFeature(schemas),
    ...BackendModules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import configuration from '../config/configuration';
import { ConfigModule } from '@nestjs/config';
import { QuestionnaireController } from './questionnaire.controller';

@Module({
  imports: [ConfigModule.forRoot({ load: [configuration] })],
  controllers: [QuestionnaireController],
  providers: [],
})
@Module({})
export class QuestionnaireModule {}

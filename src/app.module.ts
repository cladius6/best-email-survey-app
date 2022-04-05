import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { QuestionnaireModule } from './questionnaire/questionnaire.module';

@Module({
  imports: [EmailModule, QuestionnaireModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import configuration from '../config/configuration';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ load: [configuration] })],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}

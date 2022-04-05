import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('api/email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('/send')
  async send(@Body() body) {
    return 'ok';
  }
}

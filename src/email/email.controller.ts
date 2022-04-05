import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailDTO } from './email.dto';

@Controller('api/email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('/send')
  @UsePipes(new ValidationPipe({ transform: true }))
  @HttpCode(200)
  async send(@Body() body: EmailDTO) {
    try {
      await this.emailService.sendEmail(body);
      return 'Email sent successfully';
    } catch (error) {
      console.log(error);
      throw new HttpException('Email sending failed', 500);
    }
  }
}

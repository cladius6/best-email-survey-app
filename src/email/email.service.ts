import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import * as nodemailerSendgrid from 'nodemailer-sendgrid';
import { SendEmailDto } from './dto/send_email.dto';

@Injectable()
export class EmailService {
  private transporter;
  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport(
      nodemailerSendgrid({
        apiKey: this.configService.get('SENDGRID.API_KEY') as string,
      }),
    );
  }

  async sendEmail(email: SendEmailDto): Promise<void> {
    return await this.transporter.sendMail(email);
  }
}

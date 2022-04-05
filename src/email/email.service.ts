import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import * as nodemailerSendgrid from 'nodemailer-sendgrid';
import { EmailDTO } from './email.dto';

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

  async sendEmail(email: EmailDTO): Promise<void> {
    return await this.transporter.sendMail(email);
  }
}

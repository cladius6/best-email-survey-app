import { Injectable } from '@nestjs/common';
import * as sendGrid from '@sendgrid/mail';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {
  constructor(private configService: ConfigService) {
    sendGrid.setApiKey(this.configService.get('SENDGRID.API_KEY'));
    console.log(this.configService.get('SENDGRID.API_KEY'));
  }

  async sendEmail(email): Promise<boolean> {
    try {
      await sendGrid.send(email);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

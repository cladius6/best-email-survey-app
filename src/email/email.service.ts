import { Injectable } from '@nestjs/common';
import * as sendGrid from '@sendgrid/mail';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {
  constructor(private configService: ConfigService) {
    sendGrid.setApiKey(this.configService.get('SENDGRID.API_KEY'));
  }

  async sendEmail(email): Promise<void> {
    await sendGrid.send(email);
  }
}

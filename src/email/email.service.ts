import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  sendEmail(email) {
    console.log(`Email: ${email.to}`);
    console.log(`Subject: ${email.subject}`);
    console.log(`Message: ${email.message}`);
  }
}

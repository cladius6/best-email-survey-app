import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  sendEmail(email: string, subject: string, message: string) {
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
  }
}

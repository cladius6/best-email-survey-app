import { IsEmail, IsOptional, IsString } from 'class-validator';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SendEmailDto {
  @IsEmail()
  to: string;

  @IsOptional()
  @IsString()
  from = process.env.SENDGRID_EMAIL_SENDER;

  @IsOptional()
  @IsString()
  subject = process.env.SENDGRID_EMAIL_SUBJECT;

  @IsOptional()
  @IsString()
  text: string;

  @IsString()
  html: string;
}

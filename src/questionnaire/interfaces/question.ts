import { IAnswer } from './answer';

export interface IQuestion {
  id: number;
  question: string;
  answer: IAnswer;
}

import { IQuestion } from './question';

export interface IQuestionnaire {
  id: string;
  title: string;
  email: string;
  questions: IQuestion[];
}

import { IQuestionnaire } from '../questionnaire/interfaces/questionnaire';

export interface IApi {
  submitQuestionnaire(
    questionnaire: IQuestionnaire,
  ): Promise<ISubmitQuestionnaireResponse>;
  getQuestionnaire(
    req: IGetQuestionnaireRequest,
  ): Promise<IGetQuestionnaireResponse>;
}

export interface ISubmitQuestionnaireResponse {
  success: boolean;
  message: string;
  questionnaire: IQuestionnaire;
}

export interface IGetQuestionnaireResponse {
  success: boolean;
  message: string;
  questionnaire: IQuestionnaire;
}

export interface IGetQuestionnaireRequest {
  questionnaireId: number;
}

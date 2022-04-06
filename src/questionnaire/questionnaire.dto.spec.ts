import { IsNotEmpty, IsNumber, validate } from 'class-validator';

class GetQuestionnaireRequest {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
class Api {
  responseStatus: number;
  getQuestionnaireResponse(req: GetQuestionnaireRequest) {
    return {
      responseStatus: this.responseStatus,
    };
  }
}

function generateGetRequest(overrides: { id: any }) {
  const request = new GetQuestionnaireRequest();
  request.id = overrides.id === undefined ? 1 : overrides.id;
  const api = new Api();
  return request;
}
function generateGetResponse(overrides: { responseStatus: any }) {
  const response = new Api();
  response.getQuestionnaireResponse =
    overrides.responseStatus === undefined ? 200 : overrides.responseStatus;
  return response;
}

describe('QuestionnaireDTO', () => {
  it('should pass when id is given', async () => {
    const questionnaire = await generateGetRequest({ id: 123 });
    expect(await validate(questionnaire)).toMatchSnapshot();
  });
  it('should fail when id is not given', async () => {
    const questionnaire = await generateGetRequest({ id: null });
    expect(await validate(questionnaire)).toMatchSnapshot();
  });
});

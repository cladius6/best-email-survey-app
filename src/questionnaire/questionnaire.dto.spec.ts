import { validate } from 'class-validator';

class Req {}

function generateRequest(overrides: { id: any }) {
  const request = new Req();
  return request;
}

it('should fail', async () => {
  const questionnaire = await generateRequest({ id: '123' });
  expect(await validate(questionnaire)).toMatchSnapshot();
});

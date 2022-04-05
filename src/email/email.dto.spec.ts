import { validate } from 'class-validator';
import { EmailDTO } from './email.dto';

function generateRequest(overrides: { to?: any }) {
  const request = new EmailDTO();
  request.to =
    overrides.to === undefined ? 'klaudiusz.witt@gmail.com' : overrides.to;
  return request;
}
describe('EmailDTO', () => {
  it('fails without email sender', async () => {
    const request = generateRequest({ to: null });
    expect(await validate(request)).toMatchSnapshot();
  });

  it('passes with valid email sender', async () => {
    const request = generateRequest({});
    expect(await validate(request)).toMatchSnapshot();
  });
});

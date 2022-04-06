import { validate } from 'class-validator';
import { Send_emailDto } from './dto/send_email.dto';

function generateRequest(overrides: { to?: any; html?: any }) {
  const request = new Send_emailDto();
  request.to = overrides.to === undefined ? 'cladius@gmail.com' : overrides.to;
  request.html =
    overrides.html === undefined ? '<h1>Hello</h1>' : overrides.html;
  return request;
}
describe('SendEmailDTO', () => {
  it('fails without to property', async () => {
    const request = generateRequest({ to: null });
    expect(await validate(request)).toMatchSnapshot();
  });

  it('passes with valid to property', async () => {
    const request = generateRequest({});
    expect(await validate(request)).toMatchSnapshot();
  });

  it('fails without html property', async () => {
    const request = generateRequest({ html: null });
    expect(await validate(request)).toMatchSnapshot();
  });

  it('passes with valid html property', async () => {
    const request = generateRequest({ html: '<h1>HelloTest</h1>' });
    expect(await validate(request)).toMatchSnapshot();
  });

  it('fails with empty html and to property', async () => {
    const request = generateRequest({ html: null, to: null });
    expect(await validate(request)).toMatchSnapshot();
  });
});

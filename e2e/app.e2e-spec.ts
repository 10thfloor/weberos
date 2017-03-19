import { WeberosPage } from './app.po';

describe('weberos App', () => {
  let page: WeberosPage;

  beforeEach(() => {
    page = new WeberosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

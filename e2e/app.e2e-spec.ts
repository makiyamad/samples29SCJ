import { IsolationPage } from './app.po';

describe('isolation App', () => {
  let page: IsolationPage;

  beforeEach(() => {
    page = new IsolationPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

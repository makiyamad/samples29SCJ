import { samples29SCJPage } from './app.po';

describe('samples29SCJ App', () => {
  let page: samples29SCJPage;

  beforeEach(() => {
    page = new samples29SCJPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

import { Todo0610Page } from './app.po';

describe('todo0610 App', () => {
  let page: Todo0610Page;

  beforeEach(() => {
    page = new Todo0610Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

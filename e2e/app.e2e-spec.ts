import { LanguageTranslatorPage } from './app.po';

describe('language-translator App', function() {
  let page: LanguageTranslatorPage;

  beforeEach(() => {
    page = new LanguageTranslatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

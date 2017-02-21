import { KwanteraSolutionPage } from './app.po';

describe('kwantera-solution App', () => {
  let page: KwanteraSolutionPage;

  beforeEach(() => {
    page = new KwanteraSolutionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

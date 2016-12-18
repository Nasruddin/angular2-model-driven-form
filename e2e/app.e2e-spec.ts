import { Angular2TemplateFormsPage } from './app.po';

describe('angular2-template-forms App', function() {
  let page: Angular2TemplateFormsPage;

  beforeEach(() => {
    page = new Angular2TemplateFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

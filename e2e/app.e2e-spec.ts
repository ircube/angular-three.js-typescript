import { AngularThree.JsTypescriptPage } from './app.po';

describe('angular-three.js-typescript App', () => {
  let page: AngularThree.JsTypescriptPage;

  beforeEach(() => {
    page = new AngularThree.JsTypescriptPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

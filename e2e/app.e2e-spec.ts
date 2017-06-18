import { PredictionAppPage } from './app.po';

describe('prediction-app App', () => {
  let page: PredictionAppPage;

  beforeEach(() => {
    page = new PredictionAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

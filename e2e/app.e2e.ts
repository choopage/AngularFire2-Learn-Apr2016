import { AngularFire2LearnApr2016Page } from './app.po';

describe('angular-fire2-learn-apr2016 App', function() {
  let page: AngularFire2LearnApr2016Page;

  beforeEach(() => {
    page = new AngularFire2LearnApr2016Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular-fire2-learn-apr2016 Works!');
  });
});

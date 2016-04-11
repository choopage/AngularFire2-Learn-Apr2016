export class AngularFire2LearnApr2016Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-fire2-learn-apr2016-app p')).getText();
  }
}

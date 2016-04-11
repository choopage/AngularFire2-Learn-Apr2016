import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {AngularFire2LearnApr2016App} from '../app/angular-fire2-learn-apr2016';

beforeEachProviders(() => [AngularFire2LearnApr2016App]);

describe('App: AngularFire2LearnApr2016', () => {
  it('should have the `defaultMeaning` as 42', inject([AngularFire2LearnApr2016App], (app: AngularFire2LearnApr2016App) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([AngularFire2LearnApr2016App], (app: AngularFire2LearnApr2016App) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});


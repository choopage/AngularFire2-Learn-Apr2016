import {bootstrap} from 'angular2/platform/browser';
import {AngularFire2LearnApr2016App} from './app/angular-fire2-learn-apr2016';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

bootstrap(AngularFire2LearnApr2016App, [
    FIREBASE_PROVIDERS,
    defaultFirebase('https://angularfire2learnapr.firebaseio.com'),
    ROUTER_PROVIDERS
]);

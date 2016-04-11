import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'angular-fire2-learn-apr2016-app',
    providers: [ROUTER_PROVIDERS],
    templateUrl: 'app/angular-fire2-learn-apr2016.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: []
})
@RouteConfig([].concat(CliRouteConfig))

export class AngularFire2LearnApr2016App {
    defaultMeaning:number = 42;

    meaningOfLife(meaning?:number) {
        return `The meaning of life is ${meaning || this.defaultMeaning}`;
    }

    items: Observable<any[]>;
    constructor(af: AngularFire) {
        // create a list at /items
        this.items = af.list('/items');
    }
}

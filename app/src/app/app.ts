import {App, events, register, routing, web} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import AboutViewControl from '../viewcontrols/about/about.vc';
import HowToPlayViewControl from '../viewcontrols/howtoplay/howtoplay.vc';
import PromotionsControl from '../viewcontrols/promotions/promotions.vc';

export default class MyApp extends App {
    constructor(router: routing.Router, config: web.IBrowserConfig) {
        super();

		config.routingType = config.STATE;

        router.configure([
            { pattern: '', view: HomeViewControl },
            { pattern: 'about', view: AboutViewControl },
            { pattern: 'howtoplay', view: HowToPlayViewControl },
            { pattern: 'promotions', view: PromotionsControl }
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router,
    web.IBrowserConfig
]);

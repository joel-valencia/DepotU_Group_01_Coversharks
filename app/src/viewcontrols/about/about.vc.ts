import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class AboutViewControl extends BaseViewControl {
    templateString: string = require('./about.vc.html');

    context: any = {};
    
    subscribe() {
        alert('Your Subscription Has Been Sent!');
    }
}

register.viewControl('about-vc', AboutViewControl);

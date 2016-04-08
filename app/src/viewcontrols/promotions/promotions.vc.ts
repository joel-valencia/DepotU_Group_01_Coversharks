import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class PromotionsViewControl extends BaseViewControl {
    templateString: string = require('./promotions.vc.html');

    context: any = {};
}

register.viewControl('promotions-vc', PromotionsViewControl);

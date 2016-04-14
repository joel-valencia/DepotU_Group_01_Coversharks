import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class PromotionsViewControl extends BaseViewControl {
    templateString: string = require('./promotions.vc.html');

    context: any = {
        modal: false
    };
    
    toggleModal(modal: boolean) {
        this.context.modal = true;
    }
    modalOff() {
        this.context.modal = false;
    }
}

register.viewControl('promotions-vc', PromotionsViewControl);

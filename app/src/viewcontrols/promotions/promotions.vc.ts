import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class PromotionsViewControl extends BaseViewControl {
    templateString: string = require('./promotions.vc.html');

    context: any = {
        modal: false,
        items: [
            {text: 'Auburn'}, {text: 'Alabama'}
        ]
    };
    
    toggleModal(modal: boolean) {
        console.log(this.context.items);
        this.context.modal = true;
    }
    modalOff() {
        this.context.modal = false;
        alert('Your Information has been sent. Good Luck!')
    }
}

register.viewControl('promotions-vc', PromotionsViewControl);

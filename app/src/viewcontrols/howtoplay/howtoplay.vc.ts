import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HowToPlayViewControl extends BaseViewControl {
    templateString: string = require('./howtoplay.vc.html');

    context = {
        showVideos: false,
        showStarted: true
    };
    
    startFunc(){
        this.context.showStarted=true;
        this.context.showVideos=false;
        console.log("getting started");
    }
    
    vidFunc(){
           this.context.showVideos=true; 
           this.context.showStarted=false;
            console.log("videos");
    }
        // In here, manipulate the true/false values on your context that has plat-visibles looking to
}

register.viewControl('howtoplay-vc', HowToPlayViewControl);

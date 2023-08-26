import { LightningElement } from 'lwc';
import{ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class ShowToastmessage extends LightningElement {
    myTitle= 'Gyan Bhandar';

    //1st function
    handleClick(){
        this.showToast();
    }
//2nd function
    showToast(){
        const event =new ShowToastEvent({
            title:'Error',
            message:'Do you love me to click if yes, click on my child buttton'
        });
        this.dispatchEvent (event);
    }
}
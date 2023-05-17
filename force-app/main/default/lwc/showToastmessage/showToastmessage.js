import { LightningElement } from 'lwc';
import{ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class ShowToastmessage extends LightningElement {
    myTitle= 'Gyan Bhandar';

    //1st function
    handleclick(){
        this.showToast();
    }

    showToast(){
        const event =new ShowToastEvent({
            title:'show Toast Demo',
            message:'Do you love me to click if, click on my child buttton'
        });
        this.dispatchEvent (event);
    }
}
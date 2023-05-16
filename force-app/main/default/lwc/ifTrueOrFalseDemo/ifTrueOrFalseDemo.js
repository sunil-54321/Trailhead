import { LightningElement , track} from 'lwc';

export default class IfTrueOrFalseDemo extends LightningElement {

    @track hanleChange= 'Show';
    @track cardVisible = false;
    mytitle= "Demo by Sir Sunil";

    handleClick(event){
       const label= event.target.label;

       if(label==='Show'){
        this.hanleChange= 'Hide';
        this.cardVisible= true;

       } 
       else if (label==='Hide'){
        this.hanleChange='Show';
        this.cardVisible= false;
       }

    }
}
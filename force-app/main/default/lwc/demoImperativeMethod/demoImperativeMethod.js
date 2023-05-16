import { LightningElement , track} from 'lwc';
import ImperativeDemo from '@salesforce/apex/ImperativeDemo.impertativeDemoMethod';

const columns = [
    {label: "Record Id", fieldName:'Id'},
    {label:"Account Name", fieldName:'Name'},
    {label:"Phone Number", fieldName:'phone'}
];
export default class DemoImperativeMethod extends LightningElement {
@track columns = columns;
@track data = [];

connectedCallback(){
    ImperativeDemo()
    .then(result => {
        this.data=result;
    })
    .catch(error =>{

        console.log("error occurred");
    })
}



}
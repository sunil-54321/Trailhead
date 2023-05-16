import { LightningElement ,wire, track} from 'lwc';
import wireDecoratorDemo from '@salesforce/apex/wireDecoratorDemo.wireDecoratorMethod';

const columns= [
    {label:"Account Name", fieldName:'Name'},
    {label:"Account Id", fieldName:'Id'},
    {label:"Phone Number", fieldName:'Phone'},
    {label:"Type", fieldName:'Type'},
];

export default class WireDecoratoeDemo extends LightningElement {
    @track columns= columns;
    @track data= [];


    @wire(wireDecoratorDemo)
    
     wireFunction({data,error}){
        //window.alert(data);
        if(data){
            this.data= data;
        } else
        if(error){
            console.log("Error occurred");
        }
     }
    



}
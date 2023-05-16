import { LightningElement } from 'lwc';
// impoting the pre-built lightning function from library to show the toast.
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
/*
Whenever we need to call any apex class in LWC, we need to use @AuraEnabled annotation before method.c/myFirstWebComponent
And then we need to import that class using beloe script
import put namespace for that class like 'methodname or any thing based on that we could reference that class and method'
inport namespace @salesforce/Apex.methodname
*/

export default class FirstLightningWebbySunil extends LightningElement {

    //mytitle = "Gyan Bhandar";

    /*connectedCallback(){
        
        
        if(this.mytitle){
            var name =  "Gyan Bhandar Channel";
            name = "Updated Value";
            window.alert("Display the pop after call back:" +name); 
        }
       
       
    }*/
    //1st function
    //handleclickfunction(){
       // this.showToast(this.mytitle);
  //  }

    //2nd function
   /* showToast(myFirstPassingParameter){
        const event = new ShowToastEvent({
        title: myFirstPassingParameter,
        message: 'Want to display toast function',
        variant: 'success'
        });
        this.dispatchEvent(event);
    }*/
connectedCallback (){
    let callMyFunction = this.myfunction (20,5);
        //window.alert("callMyFunction : " + ' '+callMyFunction);
    }

    myfunction = (dividend, divisor) => {
        return (dividend/divisor);
    }
}

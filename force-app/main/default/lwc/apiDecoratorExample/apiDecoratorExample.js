import { LightningElement, api } from 'lwc';

export default class ApiDecoratorExample extends LightningElement {

    @api mytitle = "this is a example of @api decorator";

   @api childCompMthod(){
        this.mytitle = "Interview call from Titan";
    }
} 
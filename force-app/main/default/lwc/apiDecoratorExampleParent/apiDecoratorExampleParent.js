import { LightningElement } from 'lwc';

export default class ApiDecoratorExampleParent extends LightningElement {

    handleOnClick (){
        this.template.querySelector("c-api-decorator-example").childCompMthod();
    }
}
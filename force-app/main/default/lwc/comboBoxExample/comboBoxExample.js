import { LightningElement , track} from 'lwc';
import comboBoxMethod from '@salesforce/apex/comboBoxExample/comboBoxMethod';
export default class ComboBoxExample extends LightningElement {

    
    @track value = '';
    @track accOption= [];

    get options(){
        //return [
            //{label:"Nira", value:'Shaile'},
            //{label:"Sunil", value:'Baba Pathak'},

       // ];
    }

    connectedCallback(){
        comboBoxMethod()
        .then(result =>{
            let array =[];
            for (var i=0; i<result.length; i++){
                
            }


        })

    }

    handlechange(event){
       this.value= event.detail.value;
    }

  
}
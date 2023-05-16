import { LightningElement, track} from 'lwc';

export default class MyFirstWebComponent extends LightningElement {

    @track

    Contacts = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',  
        },
        {
            Id: 2,
            Name: 'Michal Jones',
            Title: 'VP of Sales',
        },
        {
            id: 3,
            Name:'Jennifer Lu',
            Title:'CEO'
        },
    ];
}
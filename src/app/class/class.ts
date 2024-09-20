export class Customer{
    custId:number;
    name:string;
    mobile:string;
    emailid?:string;
    address?:string; 

    constructor()
    {
        this.custId=0;
        this.name='';
        this.mobile='';

    }
}


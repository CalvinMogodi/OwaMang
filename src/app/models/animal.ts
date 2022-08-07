export class Animal {
    color: string;  
    dateOfBirth: Date;    
    lostRecord?:{
        farmerComment: string;
        lostDate: Date;
        founderComment: string;
    };
    status: string;
    gender: string;
    marketvalue: number;
    farmer: string;
    farmerPhone: string;
    farmerEmail: string;
    farmerAddress: string;
    descrition: string
    isInsured: boolean;
    insuredValue: number;   
    breed: string;
    img: string;
    brandmark: any[];
    brandmarkId: number; 
}
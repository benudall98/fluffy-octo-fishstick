import * as mongodb from "mongodb";
 
export interface Enquiry {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    postcode: string;
    product: string;
}
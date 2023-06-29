import * as mongodb from "mongodb";
 
export interface Product {
    id: number;
    name: string;
    city: string;
    state: string;
    labour: number;
    description: string;
}
import { Products } from "./product";

export class CartItem {
    public product:Products;
    public quantity:number; 
    public pricetotal:number;
    
    constructor(product:Products,quantity:number,pricetotal:number){
         this.product=product;   
         this.quantity=quantity;
         this.pricetotal=pricetotal
    }
}
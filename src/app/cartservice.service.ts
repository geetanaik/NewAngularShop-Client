import { Injectable } from '@angular/core';
import { Products } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  
  
  constructor() { }

  addProductToCart(product:Products): any {
    this.addProductToCart(product)
    console.log("was I here?")
}
}

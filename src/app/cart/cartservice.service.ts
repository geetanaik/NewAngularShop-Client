import { Injectable, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebStorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { AppGlobal } from '../config/app-global';
import { Products } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  
  
  private productsInCart:Products[]=[];
  public total:number=0;
  public tar:any;
  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService,private router: Router,private cart:CartserviceService,private route:ActivatedRoute) { }

  public addProductToCart(cproduct:Products) {
    console.log(cproduct)
    
     var cartItemsInSession=this.storage.get(AppGlobal.CART_KEY);  

     if(cartItemsInSession==null) {
     
       var products=[];  
       this.productsInCart.push(cproduct);
       console.log(this.productsInCart)
        this.storage.set(AppGlobal.CART_KEY, products);  
      }
     // //if there is already something in cart then add new product to it.
      else{
          var index=cartItemsInSession.findIndex(item => item.productName === cproduct.productName);
         if(index===-1)
          cartItemsInSession.push(cproduct);
          this.productsInCart.push(cproduct);
          this.storage.set(AppGlobal.CART_KEY, cartItemsInSession);
      }
      this.productsInCart.push(cproduct);
     this.total=this.total+cproduct.price;

     alert("Product has been added to the Cart, enjoy shopping!!! Get 10% off for order more than 5000$")
   }




   public removeProductFromCart(cproduct:Products) {
    console.log("was I in remove");
    this.total=this.total-cproduct.price;
    this.productsInCart=this.productsInCart.filter(item =>item.productName!=cproduct.productName);
  //  sessionStorage.clear();
    this.storage.set(AppGlobal.CART_KEY, this.productsInCart);
  
  }

  public inCartProduct(cproduct:Products):boolean {
    var index=this.productsInCart.findIndex(item => item.productName === cproduct.productName);

    if(index==-1){
       return false;
    }else{
       return true;
    }
  }


  public showcart():void{
  console.log(this.productsInCart)
  this.router.navigate(['checkout']);

  }

}


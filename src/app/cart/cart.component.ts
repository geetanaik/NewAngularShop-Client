import { Component, OnInit, Inject } from '@angular/core';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Router, ActivatedRoute } from '@angular/router';
import { Products } from '../model/product';
import { AppGlobal } from '../config/app-global';
import { GetproductsService } from '../getproducts/getproducts.service';
import { CartserviceService } from './cartservice.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  private productsInCart:Products[]=[];
  public total:number=0;
  public tar:any;
  

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService,private router: Router,private getproductService:GetproductsService,private cart:CartserviceService,private route:ActivatedRoute) { }

  ngOnInit() {
   var tt=this.storage.get(AppGlobal.CART_KEY);
   if(tt!=null){
      this.productsInCart= this.storage.get(AppGlobal.CART_KEY);
      this.productsInCart.forEach((item => this.total = this.total+item.price))
    }
  }
  
  public addProductToCart(cproduct:Products) {
   console.log(cproduct)
   
    var cartItemsInSession=this.storage.get(AppGlobal.CART_KEY);  //variable to access/work on cart in this session
    // console.log("---- = "+cartItemsInSession);
    
    // //check if anything alrady present in session area. if null/not then push data in product array.
    if(cartItemsInSession==null) {
    //   console.log(cartItemsInSession);
      var products=[];  
      
      //products.push(cproduct);
      this.productsInCart.push(cproduct);
      console.log(this.productsInCart)
       this.storage.set(AppGlobal.CART_KEY, products);  //store/push products to session storage
     }
    // //if there is already something in cart then add new product to it.
     else{
    //   console.log(cartItemsInSession);
         var index=cartItemsInSession.findIndex(item => item.productName === cproduct.productName);
        if(index===-1)
         cartItemsInSession.push(cproduct);
         this.storage.set(AppGlobal.CART_KEY, cartItemsInSession);
     }

     this.productsInCart.push(cproduct);
     this.total=this.total+cproduct.price;
     debugger
     //alert(this.total)
    // console.log("Product is added into the cart successfully...........");
    // console.log(cproduct);
  }

  public removeProductFromCart(cproduct:Products) {
    console.log("was I in remove");
    this.total=this.total-cproduct.price;
    this.productsInCart=this.productsInCart.filter(item =>item.productName!=cproduct.productName);
  //  sessionStorage.clear();
    this.storage.set(AppGlobal.CART_KEY, this.productsInCart);
    alert("Product has been added to the Cart, enjoy shopping!!! Get 10% off for order more than 5000$")
  
  }

  public inCartProduct(cproduct:Products):boolean {
    var index=this.productsInCart.findIndex(item => item.productName === cproduct.productName);

    if(index==-1){
       return false;
    }else{
       return true;
    }
  }


  public checkitout(): void{
    console.log("was I here to checkout");
    this.router.navigate(['checkout']);
   }

public goBackHome():void{

  this.router.navigate(['Home'])
 }

}
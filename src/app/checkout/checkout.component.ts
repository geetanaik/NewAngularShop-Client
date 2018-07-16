import { Component, OnInit, Inject } from '@angular/core';
import { WebStorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppGlobal } from '../config/app-global';
import { Products } from '../model/product';
import { CartItem } from '../model/CartItem';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  total: number=0;
  
  public cartItemList: CartItem[]=[];
  public cartItemsInSession:Products[];
  public cartItem:CartItem;
  
  sub:any;
  
  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {

   
    this.cartItemsInSession=this.storage.get(AppGlobal.CART_KEY);
         console.log(this.cartItemsInSession)
     this.cartItemsInSession.forEach(item => {
       let cartItem=new CartItem(item,1,0);
       this.cartItemList.push(cartItem);  
       console.log(this.cartItemList)  
     });
       
    }


    public totalproductcost():void{
      this.cartItemList.forEach(item=> { 
        item.pricetotal=item.quantity*item.product.price
        this.total=this.total+(item.pricetotal)
        console.log("item here is" +item.pricetotal)

        this.storage.set(AppGlobal.CART_ITEM_KEY,this.cartItemList); //new session storage of items in cart.
        this.storage.set(AppGlobal.PAYMENT_SUMMARY_KEY,this.total);  //new session storage of total price for order
        });
        this.router.navigate(['payment']);
       //return this.total; 

      
     
     }

     public goBackHome():void{

      this.router.navigate(['Home'])
     }
   
    //  public proceedToPayment(): void{
    //  console.log("we are proceeding to payment");
 
    //  this.storage.set(AppGlobal.PAYMENT_SUMMARY_KEY,this.total);  //new session storage of total price for order
    //  this.storage.set(AppGlobal.CART_KEY,this.cartItemList); //new session storage of items in cart.
    //  this.router.navigate(['payment']);
    // }

     
}
import { Component, OnInit, Input, Inject } from '@angular/core';
import { AppGlobal } from '../config/app-global';
import { WebStorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { CartItem } from '../model/CartItem';
import { Products } from '../model/product';
import { CartserviceService } from '../cart/cartservice.service';

@Component({
  selector: 'app-ordersummery',
  templateUrl: './ordersummery.component.html',
  styleUrls: ['./ordersummery.component.scss']
})
export class OrdersummeryComponent implements OnInit {
  
  public cartItemList: CartItem[]=[];
  public cartItemsInSession:Products[];
  public cartItem:CartItem;
  public ptotalPrice:number;
  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService,private router: Router,private cart:CartserviceService) { }

  ngOnInit() {

    // this.cartItemsInSession=this.storage.get(AppGlobal.CART_KEY);
    //  this.cartItemsInSession.forEach(item => {
    //    let cartItem=new CartItem(item,1,1);
       
    //    this.cartItemList.push(cartItem); 
    //    console.log("cartitems" +cartItem)   
    //  });
     this.cartItemList=this.storage.get(AppGlobal.CART_ITEM_KEY)
     this.ptotalPrice=this.storage.get(AppGlobal.PAYMENT_SUMMARY_KEY)
    }
    

 public gobacktocheckout(): void{
  console.log(this.cartItemList)
  this.cart.showcart();
 }  
 
 public pay(): void{

  this.router.navigate(['pay'])

 }
}

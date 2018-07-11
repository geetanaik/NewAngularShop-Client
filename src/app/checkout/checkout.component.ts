import { Component, OnInit, Inject } from '@angular/core';
import { WebStorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { AppGlobal } from '../config/app-global';
import { Products } from '../model/product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  private productsInCart:Products[]=[];
  public total:number=0;

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService,private router: Router) { }

  ngOnInit() {
    var cartItemsInSession=this.storage.get(AppGlobal.CART_KEY);
         console.log(cartItemsInSession)
  }

}

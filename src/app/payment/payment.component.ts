import { Component, OnInit, Inject } from '@angular/core';
import { Products } from '../model/product';
import { CartItem } from '../model/CartItem';
import { Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { AppGlobal } from '../config/app-global';
import { EmailService, EmailAccount } from './email.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public cartItemList: CartItem[]=[];
  public cartItemsInSession:Products[];
  public cartItem:CartItem;
  public ptotalPrice:number;
  emailAccount: EmailAccount;
  constructor(private emailService: EmailService,@Inject(SESSION_STORAGE) private storage: WebStorageService,private router: Router) { 
  this.emailAccount = new EmailAccount();
  }
  ngOnInit() {
  }
  debugger
   sendEmail(){
    this.emailService.sendEmail(this.emailAccount);
   }
}

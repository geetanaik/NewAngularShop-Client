import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import {HttpClientModule,HttpClient} from '@angular/common/http';


import { AppComponent } from './app.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { GetproductsComponent } from './getproducts/getproducts.component';
import { AppRoutingModule } from 'src/app/app.routing';
import { CartComponent } from './cart/cart.component';
import { GetproductsService } from './getproducts/getproducts.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { CarousalComponent } from './carousal/carousal.component';
import { DisplayproductComponent } from './displayproduct/displayproduct.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeaderComponent } from './header/header.component';
import { IgxSliderModule } from 'igniteui-angular';
import { NouisliderModule } from 'ng2-nouislider';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    GetproductsComponent,
    CartComponent,
    SidebarComponent,
    FooterComponent,
    CarousalComponent,
    DisplayproductComponent,
    HeaderComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    StorageServiceModule,
    FormsModule,
    AngularFontAwesomeModule,
    IgxSliderModule,
    NouisliderModule
  ],
  providers: [GetproductsService ],
  bootstrap: [AppComponent,]
})
export class AppModule { }

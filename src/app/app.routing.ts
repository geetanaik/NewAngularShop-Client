import { NgModule } from "@angular/core";
import { RouterModule, Route, Routes } from "@angular/router";
import { GetproductsComponent } from "./getproducts/getproducts.component";
import { CartComponent } from "./cart/cart.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AppComponent } from "./app.component";
import { DisplayproductComponent } from "./displayproduct/displayproduct.component";
import { CarousalComponent } from "./carousal/carousal.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { OrdersummeryComponent } from "./ordersummery/ordersummery.component";
import { PaymentComponent } from "./payment/payment.component";



const routes: Routes=[
{component:GetproductsComponent, path:"Home"},
{component: CartComponent,path: "viewcart"},
{component: CheckoutComponent,path: "checkout"},
{component:OrdersummeryComponent,path:"payment"},
{component:PaymentComponent, path:'pay'},
{component: GetproductsComponent, path:"products/:category"},
{component:DisplayproductComponent,path:"products/:id"},
{component:DisplayproductComponent,path:"displayproduct"},
{component:CarousalComponent, path:"*"},
{component:CarousalComponent, path:""},
{component:CarousalComponent, path:"**"},
];


export const routableComponents = 
[GetproductsComponent, CartComponent,DisplayproductComponent,CarousalComponent ];


@NgModule({
    exports: [RouterModule],
    imports: [
         RouterModule.forRoot(routes)]
})

export class AppRoutingModule{

}


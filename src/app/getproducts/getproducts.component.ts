import { Component, OnInit, ViewChild } from '@angular/core';
import { GetproductsService } from './getproducts.service';
import { Observable } from 'rxjs';
import { Products } from '../model/product';
import { diPublicInInjector } from '@angular/core/src/render3/di';
import { AppResponse } from '../model/app-response';
import { RouterLinkActive, RouterLink, RouterState, Router, ActivatedRoute } from '@angular/router';
import { RouterConfigLoader } from '@angular/router/src/router_config_loader';
import { UrlResolver } from '@angular/compiler';
import { CartComponent } from '../cart/cart.component';
import { CartserviceService } from '../cart/cartservice.service';


@Component({
  selector: 'app-getproducts',
  templateUrl: './getproducts.component.html',
  styleUrls: ['./getproducts.component.scss']
})
export class GetproductsComponent implements OnInit{


   //@ViewChild(CartComponent)  cart; this helps us to access cart compoenent.
  // we are not using @input/output as they give access to one object only not entire component.
  // @ViewChild(CartComponent) 
  // private cart:CartComponent;
  
  public product:Products=new Products();

  title = 'app';
  public productList:Products[];
  public appMessage:string="";
  name:any;
  sub:any;

  
  public constructor(private getproductService:GetproductsService, private route: ActivatedRoute, private router: Router,private cart:CartserviceService){

  }
  
  ngOnInit() { 
  //   let temp:Observable<AppResponse>=this.getproductService.sayhello();
  //   temp.subscribe(data=>{
  //    let msg=data.message;
  //    alert(msg)
  //  });
   this.sub=this.route.params.subscribe(params =>{
      console.log(params) 
      this.name=params['category'];
     
    console.log(this.sub);
    console.log(this.name);

   })
   

   

  // public getProducts() : productList{
   let products:Observable<Products[]>=this.getproductService.loadProducts();
    let link=this.route.params
      products.subscribe((results)=> {
       this.productList=results;
       this.productList =this.productList.filter((item) =>item.category ==this.name);
      // alert(this.productList)
      // alert(this.constructor.name)
      // alert(this.route)
     if(this.productList.length == null)    
      {
        alert("No items found");
      }
     
        
    });
  }
  /**
   * getItemDetails
   */
  public getItemDetails(): void{
    
    this.router.navigate(['displayproduct']);
  }

public addProductToCart(product:Products) {
//     console.log(")#)#)#)#");
//     console.log(product);
//     console.log(this.cart);
debugger
  this.cart.addProductToCart(product);
}

// public addProductToCart(product:Products){
// this.getproductService.addProductToCart(product)
// }

public inCartProduct(product:Products) :boolean {

  return this.cart.inCartProduct(product);

}

//public removeProductFromCart(product:Products):boolean{
 // return this.cart.removeProductFromCart(product);
//}
public removeProductFromCart(product:Products) :void {
  return this.cart.removeProductFromCart(product);
}




 // public getProductsbyCategory(productCat:product.category): Products{
 //  let products:Observable<Products[]>=this.getproductService.getProductsbyCategory(product.category);
//    alert(products);

 // }
}
  
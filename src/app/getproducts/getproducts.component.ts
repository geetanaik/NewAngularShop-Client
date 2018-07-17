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

  items: Array<any> = []
  public constructor(private getproductService:GetproductsService, private route: ActivatedRoute, private router: Router,private cart:CartserviceService)
  {

  }
  
  ngOnInit() { 
    this.items = [
    
      {name:'speakers', image: 'assets/images/home5.jpeg' ,price:'300'},
      { name:'phone',image: 'assets/images/home10.jpeg' ,price:'600'},
      { name:'ipad',image: 'assets/images/home11.jpeg' ,price:'500'},
      { name:'phone',image: 'assets/images/home12.jpeg' ,price:'400'},
      { name:'phone',image: 'assets/images/home13.jpeg' ,price:'100'},
      { name:'phone',image: 'assets/images/home5.jpeg' ,price:'700'},
  
    ]
   
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
  public DisplayProduct(): void{
    
    this.router.navigate(['displayproduct']);
  }

public addProductToCart(product:Products) {
  this.cart.addProductToCart(product);
}



public inCartProduct(product:Products) :boolean {
  return this.cart.inCartProduct(product);
}

//public removeProductFromCart(product:Products):boolean{
 // return this.cart.removeProductFromCart(product);
//}
public removeProductFromCart(product:Products) :void {
  return this.cart.removeProductFromCart(product);
}


public onPriceSearchHandler(event){
  let min:number= event[0];
  let max:number =event[1];
  console.log(min);
  console.log(max);
  let min1=parseInt(event[0]);
  //alert (min1)
  console.log(this.productList)
  //this.productList = this.getproductService.getProducts(min, max);
  this.productList =this.productList.filter((item) =>item.price > min);
  this.productList=this.productList.filter((item)=>item.price< max)
  console.log(this.productList)
}

}

 

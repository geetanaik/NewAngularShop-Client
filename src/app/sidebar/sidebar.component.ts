import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Products } from '../model/product';
import { GetproductsService } from '../getproducts/getproducts.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public product:Products=new Products();

  title = 'app';
  public productList:Products[];
  public categoryList:String[];
  public appMessage:string="";
  public price = 20;
  constructor(private getproductService:GetproductsService, private route:ActivatedRoute) { }

  ngOnInit() {

     var cat:string[];
    // Set an initial value
     
     let categories: Observable<String[]>=this.getproductService.getcategories();
     //debugger;
     categories.subscribe((results)=>{this.categoryList=results});
     //alert(results);
 
    
  //    this.route.params
  //    .map(params=>params['categoriList'])
  //    .do(catgory =>this.category =+this.categoryList)
  //    subscribe(params =>{ console.log("iwas in sidebar...." +params)
  //    let link=this.route.routeConfig.path
  //    alert (link)
  //   })
  
  }

  public loadPriceProd(price1:any): void{
    let products:Observable<Products[]>=this.getproductService.loadProducts();
    this.productList =this.productList.filter((item) =>item.price ==price1);
    console.log(this.productList)

  }  // public loadProducts(): void{
  // // //public loadProducts() : Observable<Products[]>{
  //  let products:Observable<Products[]>=this.getproductService.loadProducts();
  //  let link=this.route.queryParams
  //    products.subscribe((results)=> {
  //     console.log(results)
     
  //     this.productList=results;
  //     alert(this.productList)
  //     //this.productList =this.productList.filter((item) =>item.category ==link);
  //      alert(this.productList)
  //     //alert(this.constructor.name)
       
  //      alert(link)
  //      console.log("i was here")
  //      console.log(link)
  //      console.log(this.productList)
      
  //  });
    

  // }
}
  



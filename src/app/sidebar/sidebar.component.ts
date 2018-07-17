import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Products } from '../model/product';
import { GetproductsService } from '../getproducts/getproducts.service';
import { ActivatedRoute } from '@angular/router';
import { SliderType } from 'igniteui-angular';
//import { EventEmitter } from 'events';



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
  
  //public price = 20;
  //below variables are for slider
  //public sliderType = SliderType;
  private min: any;
  private max: any;
  //public priceRange: PriceRange = new PriceRange(200, 800);
  constructor(private getproductService:GetproductsService, private route:ActivatedRoute) { }


  //@Output()    //here data is sent by child to parent. 
 // notify:EventEmitter priceRange=new EventEmitter<PriceRange>();
  @Output() 
  onPriceSearch: EventEmitter<any> = new EventEmitter();
  

  ngOnInit() {

     var cat:string[];
    // Set an initial value
    let link=this.route.routeConfig.path
     
     let categories: Observable<String[]>=this.getproductService.getcategories();
     //debugger;
     categories.subscribe((results)=>{this.categoryList=results});
     //alert(results);
  }

  public loadPriceProd(price1:any): void{
    let products:Observable<Products[]>=this.getproductService.loadProducts();
    this.productList =this.productList.filter((item) =>item.price ==price1);
    console.log(this.productList)

  } 
  
  getByPrice(){
    this.onPriceSearch.emit([this.min, this.max])
  }
  
 

}


// class PriceRange {
//   constructor(
//     public lower: number,
//     public upper: number
//   ) {

//   }



  
  


  



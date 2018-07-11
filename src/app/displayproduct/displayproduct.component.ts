import { Component, OnInit } from '@angular/core';
import { Products } from '../model/product';
import { RouterLinkActive, RouterLink, RouterState, Router, ActivatedRoute } from '@angular/router';
import { GetproductsService } from '../getproducts/getproducts.service';

@Component({
  selector: 'app-displayproduct',
  templateUrl: './displayproduct.component.html',
  styleUrls: ['./displayproduct.component.scss']
})
export class DisplayproductComponent implements OnInit {
  public productList:Products[];
  
  public appMessage:string="";
  name:any;
  sub:any;
  constructor(private getproductService:GetproductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub=this.route.params.subscribe(params =>{
      console.log(params) 
      this.name=params['category'];
     
    console.log(this.sub);
    console.log(this.name);

   })


  }

  public DisplayProduct(product:Products): void{
    console.log(product)
  }

}

import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { CONFIG } from '../config/config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Products } from 'src/app/model/product';
import "rxjs/add/operator/map";
import { AppResponse } from '../model/app-response';
import { CartComponent } from '../cart/cart.component';
import { CartserviceService } from '../cart/cartservice.service';






@Injectable()
export class GetproductsService {

 
constructor(private http: Http,private cart:CartserviceService){}

public sayhello() : Observable <AppResponse>{
alert("I was here to say hello")
let step=this.http.get("http://localhost:8282/hello")
alert(" getproduct trying to get hello")
let jsonData=step.map((response) => response.json());
        return jsonData;

}

public getcategories(): Observable<String[]>{

  let step=this.http.get("http://localhost:8282/categories")
  let jsonData=step.map((response) => response.json());


  jsonData.map((response: Response) => <String[]> response.json())
  
  console.log(jsonData);
  return jsonData;


}

public loadProducts() : Observable<Products[]> {

  {
    //alert("trying to get products")
    let step=this.http.get("http://localhost:8282/products")

        let jsonData=step.map((response) => response.json());
      
          jsonData.map((item) => {
      
                 let model = new Products();
                 model._id= item.productId;
                 model.productName= item.productName;  
                 model.category= item.category;
                 model.vendorName= item.vendorName;
                 model.price= item.price;
                 model.imageUrl= item.imageUrl+ URL;
                 model.starRating=item.starRating;
                 return model;
         });
        return jsonData;
     }


  }

}

import { Http, Headers, RequestOptions } from '@angular/http';


import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { CONFIG } from '../config/config';

let productsUrl = CONFIG.baseUrls.products;

export class EmailAccount {
    userName: string;
    //password: string;
}

@Injectable()
export class EmailService {

    constructor(private http: Http) { }

    sendEmail(emailAccount: EmailAccount) {
        var headers = new Headers();
        //var info = 'userName=' + emailAccount.userName + '&password=' + emailAccount.password;
        //var info = 'userName=' + emailAccount.userName;
       // var info='username=' +"geenaik01@gmail.com"

        // var options = new RequestOptions({
        //     headers: new Headers({
        //       'Accept': 'application/json',})
        //      // 'Content-Type': 'application/json'})
        //   });
 
        //headers.append('Content-Type', 'application/X-www-form-urlencoded');
        //headers.append("Access-Control-Allow-Origin", "*");
        //headers.append('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        //headers.append('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        //headers.append('Access-Control-Allow-Credentials',"true");
        //  this.http.post('http://localhost:8282/sendmail', info, { headers: headers })
       // this.http.post('http://localhost:8282/sendmail',options)

       var headers: Headers = new Headers({
          'Accept':'application/json', 'Content-type':'application/X-www-form-urlencoded',
          "Access-Control-Expose-Headers":"Access-Control-*",
          'Access-Control-Allow-Origin':'http://localhost:4200','Access-Control-Allow-Methods':'PUT,GET,POST,DELETE,OPTIONS',
          'Allow': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
          'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept, Access-Control-*',
          'Access-Control-Allow-Credentials':"true"});

    
         console.log(headers);
       this.http.post('http://localhost:8282/sendmail', {headers:headers}).subscribe((data) => {
            if (data.json().success) {
                console.log('Sent successfully');
                alert("Congratulations!! Your order have been placed successfully")
            }
        });
    }
}
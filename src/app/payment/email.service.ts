import { Http, Headers } from '@angular/http';


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
        var info = 'userName=' + emailAccount.userName;
        headers.append('Content-Type', 'application/X-www-form-urlencoded');

        this.http.post('http://localhost:3000/sendmail', info, { headers: headers }).subscribe((data) => {
            if (data.json().success) {
                console.log('Sent successfully');
            }
        });
    }
}
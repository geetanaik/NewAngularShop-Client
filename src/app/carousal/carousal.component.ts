import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit {
  items: Array<any> = []
  constructor() {
    this.items = [
      { name: 'assets/images/jwellery shop/SaleFashionMainBanner.jpg' },
      { name: 'assets/images/jwellery shop/mainbanner2.jpg' },
      { name: 'assets/images/jwellery shop/mainbanner3.jpg' },
      { name: 'assets/images/jwellery shop/pearmain banner.jpg' },
      { name: 'assets/images/jwellery shop/RatnaMainBanner1.jpg' },
  
    ]
   }

  ngOnInit() {
  }

}

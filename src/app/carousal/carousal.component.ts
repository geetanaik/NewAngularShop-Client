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
      //{ name: 'assets/images/landingpage.jpg' },
      { name: 'assets/images/item1.jpg' },
      { name: 'assets/images/home2.jpeg' },
      { name: 'assets/images/newhome.jpg' },
      { name: 'assets/images/homda1.jpg' },
  
    ]
   }

  ngOnInit() {
  }

}

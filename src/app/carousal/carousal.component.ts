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
      { name: 'assets/images/home1.jpeg' },
      { name: 'assets/images/home2.jpeg' },
      { name: 'assets/images/home3.jpeg' },
      { name: 'assets/images/home1.jpeg' },
      { name: 'assets/images/home2.jpeg' },
      { name: 'assets/images/home3.jpeg' },
      { name: 'assets/images/home1.jpeg' },
      { name: 'assets/images/home2.jpeg' },
      
    ]
   }

  ngOnInit() {
  }

}

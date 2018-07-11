import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
}

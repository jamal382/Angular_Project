import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  number = 255;
  isClicked = false;

  onClick() {
    this.isClicked = true;
  }
  
}

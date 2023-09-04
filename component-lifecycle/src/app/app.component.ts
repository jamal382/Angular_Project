import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges {
  title = 'component-lifecycle';

  _toggled: boolean = false;
  author!: string;

  constructor() {
    console.log('Parent constructor created');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.author);
  }

  ngOnInit(): void {
    console.log('Parent ngOnInit called');
  }

  toggle() {
    this._toggled = !this._toggled; // not recommended to use private property in component
  }
}

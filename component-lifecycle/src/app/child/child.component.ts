import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {
    console.log('Child constructor created');
  }
  ngOnInit(): void {
    console.log("Child OnInit called");
  }
}

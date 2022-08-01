import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.scss'],
})
export class ObserverComponent implements OnInit {
  isFirstShowed = true;
  constructor() {}

  ngOnInit(): void {}

  toggleTemplate() {
    this.isFirstShowed = !this.isFirstShowed;
  }
}

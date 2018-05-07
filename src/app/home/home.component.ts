import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('vid') private vid: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // this.vid.nativeElement.play();
  }
}

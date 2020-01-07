import { Component, ViewChild, ElementRef, AfterViewInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ContentChild('vid', {static: false}) vid !: ElementRef;
  // @ViewChild('vid', {static: false}) private vid: ElementRef;
  // @ViewChild('myBtn', {static: false}) private btn: ElementRef;
  @ContentChild('myBtn', {static: false}) btn !: ElementRef;
  constructor() { }

  playVideo() {
    if (this.vid.nativeElement.paused) {
      this.vid.nativeElement.play();
      this.btn.nativeElement.innerText = 'Pause';
    } else {
      this.vid.nativeElement.pause();
      this.btn.nativeElement.innerText = 'Play';
    }
  }

  ngAfterViewInit(): void {
    // this.btn.nativeElement.setAttribute('highlight', '');
  }
}

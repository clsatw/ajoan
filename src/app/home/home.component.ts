import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('vid', {static: true}) private vid: ElementRef;
  @ViewChild('myBtn', {static: true}) private btn: ElementRef;
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

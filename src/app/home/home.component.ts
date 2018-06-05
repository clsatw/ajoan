import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('vid') private vid: ElementRef;
  @ViewChild('myBtn') private btn: ElementRef;
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
    this.btn.nativeElement.setAttribute('highlight', '');
  }
}

import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('vid') private vid: ElementRef;
  @ViewChild('myBtn') private btn: ElementRef;
  constructor() { }

  ngOnInit() {
  }

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
    //
  }
}

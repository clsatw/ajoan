import { Component, OnInit } from '@angular/core';
import { Faq } from '../core/models/faq';
import { FAQS } from '../core/models/mock-faqs';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  faqs = FAQS;
  selectedFaq: Faq;

  constructor() { }

  ngOnInit() {
  }
  /*
  openDialog() {
    this.dialogRef = this.openDialog(MyDialogComponet);
  }
  */
  onSelect(faq: Faq): void {
    this.selectedFaq = faq;
  }
}

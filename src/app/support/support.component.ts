import { Component, OnInit } from '@angular/core';
import { Faq } from 'app/core/models/faq';
import { ProdService } from '../prod.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})

export class SupportComponent implements OnInit {
  faqs: Observable<Faq[]>;
  selectedFaq: Faq;

  constructor(private prodService: ProdService) { }

  ngOnInit() {
    this.faqs = this.prodService.getFaqs();
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

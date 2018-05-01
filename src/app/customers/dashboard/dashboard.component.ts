import { Component, OnInit } from '@angular/core';

import { Prod } from '../../core/models/prod';
import { ProdService } from '../../prod.service';
import { Observable } from 'rxjs';

declare let gtag: Function;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  prods: Observable<Prod[]>;
  selectedProd: Prod;
  constructor(private prodService: ProdService) { }

  ngOnInit() {
    gtag('event', 'view_item_list');
    this.getProds();
  }

  onSelect(prod: Prod): void {
    this.selectedProd = prod;
  }

  getProds(): void {
    this.prods = this.prodService.getProds();
    // .subscribe(prods => this.prods = prods);
  }
}

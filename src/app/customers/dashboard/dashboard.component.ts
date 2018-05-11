import { Component, OnInit } from '@angular/core';

import { Prod } from '../../core/models/prod';
import { ProdService } from '../../prod.service';
import { Observable } from 'rxjs';
import { Breakpoints } from '@angular/cdk/layout';

declare let gtag: Function;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  prods: Observable<Prod[]>;
  selectedProd: Prod;
  breakpoint: number;
  ratio = 1;
  constructor(private prodService: ProdService) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
    // this.ratio = window.innerHeight / 1280;
    gtag('event', 'view_item_list');
    this.getProds();
  }
  onResize(event) {
    /*
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
    this.ratio = event.target.innerHeight / 1280;
    this.ratio = Math.floor(this.ratio * 10) / 10;
    */
  }

  onSelect(prod: Prod): void {
    this.selectedProd = prod;
  }

  getProds(): void {
    this.prods = this.prodService.getProds();
    // .subscribe(prods => this.prods = prods);
  }
}

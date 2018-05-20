import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// import { createRandomCatalog } from '../../core/models/mock-data';
import { Prod } from 'app/core/models/prod';
import { ProdService } from 'app/prod.service';
import { N18iService } from 'app/services/n18i.service';

// for google analytics
declare let gtag: Function;

@Component({
  selector: 'app-prod-detail',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  prod: Prod;

  constructor(private route: ActivatedRoute,
    private prodService: ProdService,
    private n18iService: N18iService,
    private location: Location) {
  }

  ngOnInit() {
    // this.catalogs = createRandomCatalog(10);
    this.getHero();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    gtag('event', 'view_item', { 'value': id });
    this.prodService.getProd(id)
      .subscribe(prod => this.prod = prod);
  }
  goBack(): void {
    try {
      // throw new Error('cannot go back');
      this.location.back();
    } catch (err) {
      gtag('event', 'exception', {
        'description': err,
        'fatal': false
      });
    }
  }
}

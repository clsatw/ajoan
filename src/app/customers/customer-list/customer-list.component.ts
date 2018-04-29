import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// import { createRandomCatalog } from '../../core/models/mock-data';
import { Prod } from '../../core/models/prod';
import { ProdService } from '../../prod.service';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  prod: Prod;

  constructor(private route: ActivatedRoute,
    private prodService: ProdService,
    private location: Location) {

  }

  ngOnInit() {
    // this.catalogs = createRandomCatalog(10);
    this.getHero();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.prodService.getProd(id)
      .subscribe(prod => this.prod = prod);
  }
  goBack(): void {
    this.location.back();
  }
}

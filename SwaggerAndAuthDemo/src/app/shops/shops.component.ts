import { Component, OnInit } from '@angular/core';
import { ShopsService } from '../api/services';
import { Shop } from '../api/models';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
  shops: Shop[];

  constructor(private shopsApi: ShopsService) { }

  ngOnInit() {
    this.shopsApi.Get({})
      .subscribe(shops=>this.shops=shops);
  }

}

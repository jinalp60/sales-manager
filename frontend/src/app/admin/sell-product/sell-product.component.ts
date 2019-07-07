import { Component, OnInit } from '@angular/core';
import { SellProduct } from '../Model/sell_product';

import { AdminServiceService } from '../admin-service.service';
@Component({
  selector: 'app-sell-product',
  templateUrl: './sell-product.component.html',
  styleUrls: ['./sell-product.component.css']
})
export class SellProductComponent implements OnInit {
  sell_product: SellProduct = new SellProduct();
  constructor(private adminService: AdminServiceService) {}

  ngOnInit() {}
  sellProduct() {
    //call service and save this product
    this.adminService.sellProductService(this.sell_product).subscribe(
      data => {
        console.log('success', data);
      },
      error => {
        console.log('error');
      }
    );
    this.sell_product = new SellProduct();
  }
}

import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { AddProductQuantityModalComponent } from '../add-product-quantity-modal/add-product-quantity-modal.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products = [];
  p: number = 1;
  term: string;
  //addQuantity: number;
  constructor(private adminService: AdminServiceService, private modalService: NgbModal) {}

  ngOnInit() {
    this.sellProduct();
  }
  deleteProduct(productId) {
    console.log('productId:', productId);
    this.adminService.deleteProductService(productId).subscribe(
      data => {
        console.log('success', data);
        //this.products = data['result'];
        this.sellProduct();
      },
      error => {
        console.log('error');
      }
    );
  }
  async addProductQuantity(product) {
    console.log('product:', product.productId);
    const modalRef = this.modalService.open(AddProductQuantityModalComponent);
    modalRef.componentInstance.product = product;

    const newProduct = await modalRef.result;
    console.log('new product from modal:', newProduct);

    this.adminService.addProductQuantityService(newProduct).subscribe(
      data => {
        console.log('success', data);
        //this.products = data['result'];
        this.sellProduct();
      },
      error => {
        console.log('error');
      }
    );
  }
  sellProduct() {
    //call service and save this product
    // this.products = [
    //   {
    //     costPrice: -1,
    //     created_at: '2019-06-05T20:43:31.997Z',
    //     id: 1,
    //     productId: 'p3',
    //     productName: 'gbf',
    //     quantity: 1,
    //     salePrice: 1,
    //     updated_at: '2019-06-05T20:43:31.997Z'
    //   },
    //   {
    //     costPrice: 20,
    //     created_at: '2019-06-06T20:43:31.997Z',
    //     id: 2,
    //     productId: 'p11',
    //     productName: 'scottie',
    //     quantity: 1,
    //     salePrice: 1,
    //     updated_at: '2019-06-06T20:43:31.997Z'
    //   }
    // ];
    this.adminService.fetchProductDetailsService().subscribe(
      data => {
        console.log('success', data);
        this.products = data['result'];
      },
      error => {
        console.log('error');
      }
    );
  }
}

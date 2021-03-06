import { Injectable } from '@angular/core';
import { Product } from './Model/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './Model/customer';
import { config } from './../../assets/config/config';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  constructor(private http: HttpClient) {}

  getOptionsWithToken() {
    let token = sessionStorage.getItem('access_token');
    console.log('token:', token);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token
      })
    };
    return options;
  }

  addProductService(newProduct: Product) {
    return this.http.post(
      '/api' + config.product.addProduct,
      { newProduct },
      this.getOptionsWithToken()
    );
  }
  addProductQuantityService(newProduct) {
    const { productId, addQuantity } = newProduct;
    return this.http.patch(
      '/api' + config.product.addProductQuantity,
      { productId, addQuantity },
      this.getOptionsWithToken()
    );
  }
  deleteProductService(productId) {
    return this.http.delete(
      '/api' + config.product.deleteProduct + '/' + productId,
      this.getOptionsWithToken()
    );
  }
  addCustomerService(newCustomer: Customer) {
    // console.log("service client",newClient);
    return this.http.post(
      '/api' + config.customer.addCustomer,
      { newCustomer },
      this.getOptionsWithToken()
    );
  }
  sellProductService(sellProduct) {
    // console.log("service client",newClient);
    return this.http.post(
      '/api' + config.product.sellProduct,
      { sellProduct },
      this.getOptionsWithToken()
    );
  }
  fetchProductDetailsService() {
    console.log('fetching product details');
    return this.http.get('/api' + config.product.fetchProductDetails, this.getOptionsWithToken());
  }
}

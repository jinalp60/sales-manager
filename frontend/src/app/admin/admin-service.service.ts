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
  addCustomerService(newCustomer: Customer) {
    // console.log("service client",newClient);
    return this.http.post(
      'http://localhost:8000/customer/addCustomer',
      { newCustomer },
      this.getOptionsWithToken()
    );
  }
  sellProductService(phoneNo, productName, quantity, sellingPrice, moneyPaid) {
    // console.log("service client",newClient);
    return this.http.post('http://localhost:8000/sellProduct', {
      phoneNo: phoneNo,
      productName: productName,
      quantity: quantity,
      sellingPrice: sellingPrice,
      moneyPaid: moneyPaid
    });
  }
  fetchProductDetailsService() {
    console.log('fetching product details');
    return this.http.get('/api' + config.product.fetchProductDetails, this.getOptionsWithToken());
  }
}

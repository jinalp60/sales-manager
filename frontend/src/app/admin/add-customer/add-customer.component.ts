import { Component, OnInit } from '@angular/core';
import { Customer } from '../Model/customer';
import { AdminServiceService } from '../admin-service.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  newCustomer: Customer = new Customer();
  constructor(private adminService: AdminServiceService) {}

  ngOnInit() {}
  addCustomer() {
    console.log('add Customer', this.newCustomer);
    //call service and save this product
    this.adminService.addCustomerService(this.newCustomer).subscribe(
      data => {
        console.log('success', data);
      },
      error => {
        console.log('error');
      }
    );
    //resetting the form
    this.newCustomer = new Customer();
  }
}

import { Component, OnInit } from '@angular/core';
import { Customer } from '../Model/customer';
import { AdminServiceService } from '../admin-service.service';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  newCustomer:Customer =new Customer();
  constructor(private adminService: AdminServiceService) { }

  ngOnInit() {
  }
  addCustomer(){
    console.log("add Customer",this.newCustomer);
    //call service and save this product
    this.adminService.addCustomerService(this.newCustomer).subscribe(data=>{
      console.log("success",data);
    },
    error=>{
      console.log("error");
    });
    //resetting the form
    this.newCustomer=new Customer();
  }
}

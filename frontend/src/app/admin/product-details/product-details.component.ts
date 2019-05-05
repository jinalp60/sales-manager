import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  products=[];
  p: number = 1;
  term: string;

  constructor(private adminService: AdminServiceService) { }

  ngOnInit() {
    this.sellProduct();
  }
  sellProduct(){
  
    //call service and save this product
    this.adminService.fetchProductDetailsService().subscribe(data=>{
      console.log("success",data);
      this.products=data["result"];
    },
    error=>{
      console.log("error");
    });
    
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminServiceService } from '../admin-service.service';
@Component({
  selector: 'app-sell-product',
  templateUrl: './sell-product.component.html',
  styleUrls: ['./sell-product.component.css']
})
export class SellProductComponent implements OnInit {

  phoneNo: number;
  productName: string;
  quantity: number;
  sellingPrice: number;
  moneyPaid:number;
  constructor(private adminService: AdminServiceService) { }

  
  ngOnInit() {
  }
  sellProduct(){
  
    //call service and save this product
    this.adminService.sellProductService(this.phoneNo,this.productName,this.quantity,this.sellingPrice,this.moneyPaid).subscribe(data=>{
      console.log("success",data);
    },
    error=>{
      console.log("error");
    });
    this.phoneNo=null;
    this.productName=null;
    this.quantity=null;
    this.sellingPrice=null;
    this.moneyPaid=null;
  }

}

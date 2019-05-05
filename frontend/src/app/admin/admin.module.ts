import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SellProductComponent } from './sell-product/sell-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminServiceService } from './admin-service.service';
import { AddClientComponent } from './add-client/add-client.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  declarations: [AdminPageComponent, SellProductComponent, AddProductComponent, AddClientComponent, ProductDetailsComponent, CustomerDetailsComponent],
  providers:[AdminServiceService]
})
export class AdminModule { }

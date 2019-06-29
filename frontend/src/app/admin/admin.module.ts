import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SellProductComponent } from './sell-product/sell-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminServiceService } from './admin-service.service';
import { AddClientComponent } from './add-client/add-client.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddProductQuantityModalComponent } from './add-product-quantity-modal/add-product-quantity-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NgbModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [
    AdminPageComponent,
    SellProductComponent,
    AddProductComponent,
    AddClientComponent,
    ProductDetailsComponent,
    CustomerDetailsComponent,
    AddProductQuantityModalComponent
  ],
  providers: [AdminServiceService],
  entryComponents: [AddProductQuantityModalComponent]
})
export class AdminModule {}

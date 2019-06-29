import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AuthGuard } from '../../app/auth.guard';
import { AddProductComponent } from './add-product/add-product.component';
import { SellProductComponent } from './sell-product/sell-product.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
const routes: Routes = [
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AuthGuard],
    data: { animation: 'AdminPage' },
    children: [
      {
        path: 'addProduct',
        component: AddProductComponent,
        canActivate: [AuthGuard],
        data: { animation: 'AddProductPage' }
      },
      {
        path: 'sellProduct',
        component: SellProductComponent,
        canActivate: [AuthGuard],
        data: { animation: 'SellProductPage' }
      },
      {
        path: 'addCustomer',
        component: AddCustomerComponent,
        canActivate: [AuthGuard],
        data: { animation: 'AddCustomerPage' }
      },
      {
        path: 'productDetails',
        component: ProductDetailsComponent,
        canActivate: [AuthGuard],
        data: { animation: 'ProductDetailsPage' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

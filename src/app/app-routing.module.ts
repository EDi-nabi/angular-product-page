import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductPageGuard } from './product-page/product-page.guard';


const routes: Routes = [
  { path: '', component: ProductListPageComponent, pathMatch: 'full' },
  { path: 'product/:id', component: ProductPageComponent, canActivate: [ProductPageGuard], }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

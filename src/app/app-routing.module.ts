import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListPageComponent } from './view/product-list-page/product-list-page.component';
import { ProductPageComponent } from './view/product-page/product-page.component';
import { ProductPageGuard } from './view/product-page/product-page.guard';
import { ProductListPageGuard } from './view/product-list-page/product-list-page.guard';


const routes: Routes = [
  { path: '', component: ProductListPageComponent, pathMatch: 'full', canActivate: [ProductListPageGuard] },
  { path: 'product/:id', component: ProductPageComponent, canActivate: [ProductPageGuard], }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { ProductPageComponent } from './product-page/product-page.component';



const routes: Routes = [
  { path: '', component: ProductListPageComponent, pathMatch: 'full' },
  { path: 'product/:id', component: ProductPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

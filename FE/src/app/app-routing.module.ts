import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListFoodComponent} from "./modules/user/home-page/list-food/list-food.component";
import {DetailProductComponent} from "./modules/user/home-page/detail-product/detail-product.component";

const routes: Routes = [
  {
    path: 'home',
    children: [
      {path: '', component: ListFoodComponent}
    ]
  },
  {path: 'detail/:id', component: DetailProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

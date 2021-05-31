import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFoodComponent } from './list-food/list-food.component';
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule} from "@angular/forms";
import { DetailProductComponent } from './detail-product/detail-product.component';
import {RouterModule} from "@angular/router";




@NgModule({
  declarations: [
    ListFoodComponent,
    DetailProductComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule,
  ]
})
export class HomePageModule { }

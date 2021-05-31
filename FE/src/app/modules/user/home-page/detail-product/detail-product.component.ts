import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FoodService} from "../../../../services/food.service";
import {Food} from "../../../../model/Food";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  // @ts-ignore
  public food: Food;
  public foodId: number | undefined;

  constructor(
    private title: Title,
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Chi Tiết Sản Phẩm");
    this.activatedRoute.params.subscribe(data => {
    this.foodId = data.id;
    this.foodService.getFoodById(this.foodId).subscribe(data1 => {
      this.food = data1;
      console.log(this.food);
    });
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FoodService} from "../../../../services/food.service";
import {Food} from "../../../../model/Food";
import {MatDialog} from "@angular/material/dialog";
import {LoadingComponent} from "../../../loading/loading.component";

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.scss']
})
export class ListFoodComponent implements OnInit {

  public foodList: Food[] = [];
  page: any;

  //Biến search
  // @ts-ignore
  foodName: string;
  categoryId = 0;

  constructor(
    public title: Title,
    public foodService: FoodService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.title.setTitle('EwaliFood | Đặt đồ ăn online');
    this.openLoading();
    this.foodService.getAllFood().subscribe(data => {
      this.foodList = data;
      console.log(this.foodList);
    });
  }

  sortByName() {
    this.openLoading();
    this.foodService.getAllSortByName().subscribe(data => {
      this.foodList = data;
    });
  }

  sortByPrice() {
    this.openLoading();
    this.foodService.getAllSortByPrice().subscribe(data => {
      this.foodList = data;
    });
  }

  public openLoading() {
    this.dialog.open(LoadingComponent, {
      width: '400px',
      height: '200px',
      disableClose: true
    });
    setTimeout(() => {
      this.dialog.closeAll();
    }, 1500);
  }

  sortByRating() {
    this.openLoading();
    this.foodList = [];
    this.foodService.getAllByRating().subscribe(data => {
      for (let i=0; i< data.length; i++) {
        this.foodList.push(data[i].food);
      }
    });
  }

  search() {
    this.openLoading();
    this.foodService.getAllBySearch(this.foodName, this.categoryId).subscribe(data => {
      console.log(data);
      this.foodList = data;
    });
  }
}

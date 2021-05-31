import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private API_URL: string = 'http://localhost:8080/food';

  constructor(
    public httpClient: HttpClient
  ) { }

  public getAllFood(): Observable<any> {
    return this.httpClient.get(this.API_URL + '/list');
  }

  public getAllSortByName(): Observable<any> {
    return this.httpClient.get(this.API_URL + '/sort-by-name');
  }

  public getAllSortByPrice(): Observable<any> {
    return this.httpClient.get(this.API_URL + '/sort-by-price');
  }

  public getAllByRating(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/rating/list');
  }

  public getAllBySearch(foodName: string, categoryId: number): Observable<any> {
    return this.httpClient.get(this.API_URL + '/search?foodName=' + foodName + '&categoryId=' + categoryId);
  }

  public getFoodById(foodId: number | undefined): Observable<any> {
    return this.httpClient.get(this.API_URL + '/detail/' + foodId);
  }
}

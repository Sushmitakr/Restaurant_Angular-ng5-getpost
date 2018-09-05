import { Injectable } from '@angular/core';
//import { Http, Response, Headers, URLSearchParams, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import {  mymodel } from '../model/mymodel'
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ "Content-type": "application/json"})
};

@Injectable()
export class RestaurantService {
//URLS for CRUD operations
//allRestaurantsUrl = "http://localhost:8080/api/v1/getall";
//restaurantUrl = "http://localhost:8080/api/v1/restaurant";
  restaurant: mymodel;
  constructor(private http:HttpClient) { 

  }

  //Fetch all restaurants
  public getRest() : Observable<mymodel[]>{
    return this.http.get<mymodel[]>("http://localhost:8080/api/v1/getall");
  }

  public postProfile(restaurants): Observable<mymodel> {
    return this.http.post<mymodel>("http://localhost:8080/api/v1/restaurant", restaurants);
  }

  public deleteProfile(restaurants) {
    return this.http.delete(
      "http://localhost:8080/api/v1/delete" + 
      "/" + restaurants.id);
  }

  public updateProfile(restaurants): Observable<mymodel> {
    const id = restaurants.id;
    return this.http.put<mymodel>("http://localhost:8080/api/v1/update/${id}", restaurants);
  }
}

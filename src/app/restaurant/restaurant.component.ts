import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { RestaurantService } from './restaurant.service';
import { mymodel } from '../model/mymodel';

@Component({
    selector: 'app-restaurant',
    template: './restaurant.component.html',
    styleUrls: ['./restaurant.component.css']
})

export class RestaurantComponent implements OnInit {
   
    restaurants: mymodel[];
    restaurant: mymodel;

    constructor(
        private router: Router, 
        private restaurantService: RestaurantService) 
        {

         }

    ngOnInit() {
        this.restaurantService.getRest()
            .subscribe(  data => {
                    this.restaurants = data;
                });

    }

    deleteProfile(restaurant: mymodel): void{
        this.restaurantService.deleteProfile(restaurant)
            .subscribe(
                data => {
                    this.restaurants = this.restaurants.filter(u => u!= restaurant);
                });
    }

    setter(restaurant: mymodel){
        this.restaurant = restaurant;
    }

    getter(){
        this.restaurant = this.restaurant;
    }

    // 

   

    // 
}

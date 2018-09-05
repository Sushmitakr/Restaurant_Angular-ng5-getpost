import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { mymodel } from "../model/mymodel";
import { RestaurantService } from "./restaurant.service";

@Component ({
    templateUrl: "./update-restaurant.component.html",
    styleUrls: ["./update-restaurant.component.css"]
})
export class UpdateRestaurantComponent {
    restaurants: mymodel[];
    restaurant: mymodel = new mymodel();

    constructor(
        private router: Router,
        private restaurantService: RestaurantService
    ){ }

updateProfile(restaurant: mymodel): void{
       this.restaurantService.updateProfile(restaurant)
           .subscribe(
               data => {
                   alert("Restaurant Data Updated Successfully");
                });
 }
}


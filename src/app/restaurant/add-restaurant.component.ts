import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { mymodel } from "../model/mymodel";
import { RestaurantService } from "./restaurant.service";

@Component({
  templateUrl: "./add-restaurant.component.html",
  styleUrls: ["./add-restaurant.component.css"]
})
export class AddRestaurantComponent {
  restaurant: mymodel = new mymodel();

  constructor(
    private router: Router,
    private restaurantService: RestaurantService
  ) {}

  postProfile(): void {
        this.restaurantService.postProfile(this.restaurant)
                .subscribe(
                     data => {
                         alert("Restaurant Created Successfully!!");
                     });
     }

//   createRestaurants(): void {
//     this.restaurantService
//       .createRestaurants(this.restaurant)
//       .subscribe(data => {
//         alert("User created successfully.");
//       });
//   }
}

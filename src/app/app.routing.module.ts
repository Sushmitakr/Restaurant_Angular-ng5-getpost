import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { mymodel } from './model/mymodel';
//import { RestaurantList } from './restaurant-list.service';
//import { RestaurantCreate } from './restaurant-create.service';

const routes: Routes = [
    { path: 'restaurants', component: mymodel},
   // { path: 'restaurant/postProfile', component: RestaurantCreate},
   // { path: 'restaurant/edit/:id', component: RestaurantCreate}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RestaurantRoutingModule { }
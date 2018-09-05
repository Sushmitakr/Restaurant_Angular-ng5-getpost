import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import { AppRoutingModule } from './app.component';
import { RestaurantService } from './restaurant/restaurant.service';
import { HttpClientModule } from '@angular/common/http';
//import { HttpsRequestInterceptor } from './interceptor.module';

import { mymodel } from './model/mymodel';
import { UpdateRestaurantComponent } from './restaurant/update-restaurant.component';
import { AddRestaurantComponent } from './restaurant/add-restaurant.component';
//import { AlertModule } from 'ngx-bootstrap';
//import { AlertComponent } from './directives/index';

//import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestaurantComponent } from './restaurant/restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    AddRestaurantComponent,
    UpdateRestaurantComponent
  ],
  imports: [
    BrowserModule,
  //  AppRoutingModule,
    mymodel,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    RestaurantService
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpsRequestInterceptor,
    //   multi:true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



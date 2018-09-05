import { Component } from '@angular/core';

// import { HttpClientModule } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
// import { mymodel } from './model/mymodel';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

// interface UserDetails{
//   login:string,
//   name:string,
//   company:string
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'Restaurant App';
  // dataNew:mymodel[] = [];
  // restaurantdata:any[] = [];
  // restaurantIdToUpdate:any;
  // restaurantName:any;
  //restaurantI
  //name:string = '';
 // constructor(private httpClient:HttpClient){ }

  // onNameKeyUp(event:any){
  //   this.name = event.target.value;
  // }
  // getProfile(){
  //   this.httpClient.get<mymodel>('https://developers.zomato.com/api/v2.1/categories')
  //   .subscribe(
  //     (data:any)=>
  //     {
  //       if(data.length != 0) {
  //         console.log("aa gya kya");
          
  //         for (let i = 0; i < data.categories.length; i++) {
  //           console.log("Hello");
            
  //           this.dataNew[i] = data.categories[i].categories;
  //         }
  //       }
  //       // console.log(data);
  //       // this.dataNew = Array.of(data.categories);
  //     }
  //   )
  // }

  // getRestaurant(){
  //   this.httpClient.get('https://developers.zomato.com/api/v2.1/restaurant?res_id=16774318')
  //   .subscribe(
  //     (dd:any)=>
  //     {
  //       console.log(dd);
  //       this.restaurantdata=Array.of(dd);
  //     }
  //   )
//   // }
// getRest(){
//   this.httpClient.get('http://localhost:8080/api/v1/getall')
//     .subscribe(
//       (dd:any)=>
//       {
//         console.log(dd);
        
//         //this.restaurantdata=Array.of(dd);
//       }
//     )
// }
// postProfile()
// {
//   this.httpClient.post(`http://localhost:8080/api/v1/restaurant`,
// {
//   id:2,
//   name:"don",
//   image:"imgurll111",
//   location:"address"
// })
//   .subscribe(
//     (data:any)=>
//     {
//       console.log(data);
//     }
//   )
// }
// deleteProfile()
// {
//   this.httpClient.delete(`http://localhost:8080/api/v1/delete/2`)
//   .subscribe(
//     (data:any[])=>
//     {
//       console.log(data)
//     }
//   )
// }
// updateProfile()
// {
//   this.httpClient.put(`http://localhost:8080/api/v1/update/2`,{
//     id:2,
//     name:"akt",
//     imageLink:"imageLink1",
//     location:"loc2"
//   })
//   .subscribe(
//     (data:any[])=>
//     {
//       console.log(data)
//     }
//   )
}


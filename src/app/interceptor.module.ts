// import { Injectable, NgModule } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
// import { HTTP_INTERCEPTORS} from '@angular/common/http';

// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/catch';

// @Injectable()
// export class HttpsRequestInterceptor implements HttpInterceptor{

//     constructor() { }

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
//         const dupReq = req.clone({ headers: req.headers.set('user-key',"d91060345076153b8e530a3df88da04c")});

//         console.log("Sending request with new header now ....");

//         //sending new request
//         return next.handle(dupReq)
//         .catch((error, caught) => {
//             //intercept response error and display it to console
//             console.log("Error Occured");
//             console.log(error);

//             //return error to method who called it
//             return Observable.throw(error);
//          }) as any;
//     }
// }
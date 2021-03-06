import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  status: number;
  

  postUserUpdates(body: { "first_name": String; "last_name": String; "email": String; "mobile": Number; "password": String; "address": String; }): any {
    throw new Error("Method not implemented.");
  }
  

  constructor(private http: HttpClient, private _router: Router, private spinnerService: Ng4LoadingSpinnerService) { }
  login(body) {
    console.log("IN service");
    return this.http.post('http://192.168.1.38:4000/auth/login',body);
  }
  addTag(body) {
    console.log("IN service");
    return this.http.post('http://192.168.1.38:4000/users',body);

  }
  
  deleteTag(body) {
    console.log("IN service",body);
    return this.http.delete('http://192.168.1.38:4000/users',body);
   

  }
  viewAllStatement() {
    console.log("IN service");
    return this.http.get('http://localhost:4000/transactions/details/');

  }

  filterTransaction()
  {
    console.log("Filtered Data");
   return this.http.get("http://localhost:4000/transactions/notag/");
  }

  importData(fData)
  {
    this.spinnerService.show();
    console.log("Loading");
    return this.http.post("http://localhost:4000/transactions/import", fData);
  }

  ChartDetails()
  {
    console.log("Calling Chart Data");
   return this.http.get("http://localhost:4000/transactions/chartdetails");
  }
  
}


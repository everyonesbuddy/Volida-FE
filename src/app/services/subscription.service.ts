import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SubsData } from '../models/subs-data-model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient, private router: Router) { }


  handlePayment(id: any) {
    const subsData: SubsData = {id: id, auth:{_id: localStorage.getItem('_id')}};
    let header = new HttpHeaders().set("Authorization", 'Bearer '+localStorage.getItem('token'));
    this.http.post("/api/create-payment", subsData, {headers:header}).subscribe((response: any) => {
      return window.open(response,"_self");
    })
  }


  getPaymentStatus() {
    this.http.get("/api/payment-status/?_id="+localStorage.getItem('_id')).subscribe((response: any) => {
      if(response.subscriptions.length === 0) {
        this.router.navigate(['']);
      } else {
        this.router.navigate(['/dashboard']);
      }
    })
  }

  checkPayment() {
    return this.http.get("/api/payment-status/?_id="+localStorage.getItem('_id'))
  }


   manageSubscription() {
     this.http.get("/api/customer-portal/?_id="+localStorage.getItem('_id')).subscribe((response: any) => {
      return window.open(response,"_self");
    })
   }

}

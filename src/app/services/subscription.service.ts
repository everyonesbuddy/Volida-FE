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


  handleSubscription(id: any) {
    const subsData: SubsData = {id: id, auth:{_id: localStorage.getItem('_id')}};
    
    let header = new HttpHeaders().set("Authorization", 'Bearer '+localStorage.getItem('token'));
    this.http.post("http://localhost:8000/api/create-subscription", subsData, {headers:header}).subscribe((response: any) => {
      return window.open(response,"_self");
    })
  }

  getSubscriptionStatus() {
    this.http.get("http://localhost:8000/api/subscription-status/?_id="+localStorage.getItem('_id')).subscribe((response: any) => {
      if(response.subscriptions.length === 0) {
        this.router.navigate(['/subscriptions']);
      } else {
        this.router.navigate(['/dashboard']);
      }
    })
  }


   manageSubscription() {
     this.http.get("http://localhost:8000/api/customer-portal/?_id="+localStorage.getItem('_id')).subscribe((response: any) => {
      return window.open(response,"_self");
    })
   }

}

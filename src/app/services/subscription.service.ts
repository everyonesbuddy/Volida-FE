import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SubsData } from '../models/subs-data-model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  constructor(private http: HttpClient, private router: Router) {}

  handlePayment(id: any) {
    const subsData: SubsData = {
      id: id,
      auth: { _id: localStorage.getItem('_id') },
    };
    let header = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );
    this.http
      .post('https://volida-be.herokuapp.com/api/create-payment', subsData, {
        headers: header,
      })
      .subscribe((response: any) => {
        return window.open(response, '_self');
      });
  }

  getPaymentStatus() {
    this.http
      .get(
        'https://volida-be.herokuapp.com/api/payment-status/?_id=' +
          localStorage.getItem('_id')
      )
      .subscribe((response: any) => {
        if (response.subscriptions.length === 0) {
          this.router.navigate(['']);
        } else {
          this.router.navigate(['/processed']);
        }
      });
  }

  checkPayment() {
    return this.http.get(
      'https://volida-be.herokuapp.com/api/payment-status/?_id=' +
        localStorage.getItem('_id')
    );
  }

  manageSubscription() {
    this.http
      .get(
        'https://volida-be.herokuapp.com/api/customer-portal/?_id=' +
          localStorage.getItem('_id')
      )
      .subscribe((response: any) => {
        return window.open(response, '_self');
      });
  }
}

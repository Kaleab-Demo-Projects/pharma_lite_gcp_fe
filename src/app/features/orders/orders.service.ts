import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export interface Order {
  id: string;
  customer: string;
  total: number;
  status: string;
}

@Injectable({ providedIn: 'root' })
export class OrdersService {
  private readonly base = `${environment.apiBaseUrl}/orders`;

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.base);
  }
}
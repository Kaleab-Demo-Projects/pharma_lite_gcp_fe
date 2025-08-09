import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrdersService, Order } from './orders.service'; // ✅ add
import { Observable } from 'rxjs';                        // ✅ add

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './orders.html',
  styleUrl: './orders.scss',
})
export class Orders {
  // was: orders = [...]
  orders$: Observable<Order[]>;

  constructor(private svc: OrdersService) {
    this.orders$ = this.svc.getOrders();
  }
}

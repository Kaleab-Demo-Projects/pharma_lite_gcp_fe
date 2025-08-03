import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './orders.html',
  styleUrl: './orders.scss',
})
export class Orders {
  orders = [
    { id: 'ORD001', customer: 'John Doe', total: 58.99, status: 'Shipped' },
    { id: 'ORD002', customer: 'Jane Smith', total: 23.49, status: 'Processing' },
    { id: 'ORD003', customer: 'Bob Johnson', total: 134.00, status: 'Delivered' },
  ];
}

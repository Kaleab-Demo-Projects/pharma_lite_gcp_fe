import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  stats = [
    { id: 1, label: 'Total Medicines', value: 123 },
    { id: 2, label: 'Pending Orders', value: 15 },
    { id: 3, label: 'Delivered Orders', value: 98 },
  ];
}

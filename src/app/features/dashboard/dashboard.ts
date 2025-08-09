import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardService, Stat } from './dashboard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  stats$: Observable<Stat[]>;

  constructor(private svc: DashboardService) {
    this.stats$ = this.svc.getStats();
  }
}
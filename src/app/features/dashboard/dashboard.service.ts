import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export interface Stat {
  id: number;
  label: string;
  value: number;
}

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private readonly base = `${environment.apiBaseUrl}/dashboard`;

  constructor(private http: HttpClient) {}

  getStats(): Observable<Stat[]> {
    return this.http.get<Stat[]>(`${this.base}/stats`);
  }
}
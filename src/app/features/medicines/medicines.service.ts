import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export interface Medicine {
  id: Number,
  name: string;
  dosage: string;
  price: number;
  inStock: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {
  private readonly base = `${environment.apiBaseUrl}/medicines`;

  constructor(private http: HttpClient) {}

  getMedicines(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.base);
  }
}
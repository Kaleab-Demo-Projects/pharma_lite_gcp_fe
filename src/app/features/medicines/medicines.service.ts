import { Injectable } from '@angular/core';

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
  getMedicines(): Medicine[] {
    return [
      { id: 1, name: 'Paracetamol', dosage: '500mg', price: 3.99, inStock: true },
      { id: 2, name: 'Ibuprofen', dosage: '200mg', price: 4.99, inStock: false },
      { id: 3, name: 'Amoxicillin', dosage: '250mg', price: 12.5, inStock: true }
    ];
  }
}
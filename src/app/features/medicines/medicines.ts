import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MedicinesService, Medicine } from './medicines.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medicines',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './medicines.html',
  styleUrl: './medicines.scss'
})
export class Medicines {
  // was: medicines: Medicine[] = [];
  medicines$: Observable<Medicine[]>;

  constructor(private medService: MedicinesService) {
    this.medicines$ = this.medService.getMedicines();
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MedicinesService, Medicine } from './medicines.service';

@Component({
  selector: 'app-medicines',
  imports: [CommonModule, RouterModule],
  templateUrl: './medicines.html',
  styleUrl: './medicines.scss'
})
export class Medicines {
  medicines: Medicine[] = [];

  constructor(private medService: MedicinesService) {
    this.medicines = this.medService.getMedicines();
  }
}

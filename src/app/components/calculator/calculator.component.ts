import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  a: number = 0;
  b: number = 0;
  result: number = 0;

  constructor() {}

  sum() {
    this.result = this.a + this.b;
  }

  subtract() {
    this.result = this.a - this.b;
  }

  multiply() {
    this.result = this.a * this.b;
  }

}

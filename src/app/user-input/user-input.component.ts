import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitialInvestment = signal(0);
  enteredAnnualInvestment = signal(0);
  enteredExpectedReturn = signal(5);
  enteredDuration = signal(10);

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: this.enteredInitialInvestment(),
      duration: this.enteredDuration(),
      expectedReturn: this.enteredExpectedReturn(),
      annualInvestment: this.enteredAnnualInvestment(),
    });

    this.resetForm();
  }

  private resetForm() {
    this.enteredAnnualInvestment.set(0);
    this.enteredInitialInvestment.set(0);
    this.enteredExpectedReturn.set(0);
    this.enteredDuration.set(0);
  }
}

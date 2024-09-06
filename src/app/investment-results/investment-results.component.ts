import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { ResultsData } from '../investment-input.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // results = input<...>()
  results = input<Array<ResultsData>>();
}

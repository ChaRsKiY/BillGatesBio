import { Component, Input } from '@angular/core';

@Component({
  selector: 'bill-gates-quotes',
  templateUrl: './bill-gates-quotes.component.html',
  styleUrls: ['./bill-gates-quotes.component.css']
})
export class BillGatesQuotesComponent {
  @Input() quotes: string[] = [];
}

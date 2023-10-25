import { Component, Input } from '@angular/core';

@Component({
  selector: 'bill-gates-links',
  templateUrl: './bill-gates-links.component.html',
  styleUrls: ['./bill-gates-links.component.css']
})
export class BillGatesLinksComponent {
  @Input() links: string[] = [];
}

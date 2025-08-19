import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { DiscountPipe } from '../discount.pipe';
import { DiscountPipe } from '../discount-pipe';
@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [CommonModule, DiscountPipe],
  template: `
    <div class="card">
      <h3>{{ book.title | uppercase }}</h3>
      <p>Price: {{ book.price | currency:'INR' }}</p>
      <p>Discounted: {{ book.price | discount:10 }}</p>
      <p>Published: {{ book.publicationDate | date }}</p>
      <p>{{ book.description | slice:0:50 }}...</p>
    </div>
  `,
  styleUrl: './book-item.css'
})
export class BookItemComponent {
  @Input() book: any;
}

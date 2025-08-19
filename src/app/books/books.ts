import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data';
//import { Data } from '../services/data';
import { Observable, Subscription } from 'rxjs';
import { BookItemComponent } from '../book-item/book-item';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, BookItemComponent],
  templateUrl: './books.html',
  styleUrl: './books.css'
}) 
export class BooksComponent implements OnInit, OnDestroy {
  books: any[] = [];
  books$!: Observable<any>;
  sub!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.books$ = this.dataService.getBooks(); // ✅ assign here

    this.sub = this.dataService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}
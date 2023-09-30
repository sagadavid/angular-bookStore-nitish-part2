import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/services/book.service';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  //inject book service
  constructor(private bookService: BookService) {}

  ngOnInit(): void {}

  saveBook(value: any): void {
    console.log(value);
    //now add book is available in service, then use it
    const book2save: BookModel = new BookModel();
    book2save.id = value.id;
    book2save.author = value.author;
    book2save.title = value.title;
    book2save.price = { currency: '$', value: value.price };
    book2save.totalPages = value.pages;

    this.bookService.addBook(book2save);
  }
}

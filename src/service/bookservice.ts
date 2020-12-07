import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Book } from 'src/model/book';



@Injectable()
export class BookService
{
    barr=[
            new Book("Java","All the java content"),

         ];

    addBook(b:Book)
    {
        this.barr.push(b);
        console.log(this.barr);
    }

    getAllBooks():Book[]
    {
        return this.barr;
    }
}
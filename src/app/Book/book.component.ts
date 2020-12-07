import {Component} from '@angular/core';
import { Book } from 'src/model/book';
import { BookService } from 'src/service/bookservice';

@Component({
    selector:'book',
    templateUrl:'./book.component.html',
    styleUrls:['./book.component.html']
})


export class BookComponent
{
    bname:string;
    contents:string;
    
    constructor(private bservice:BookService){}
    ngOnInit(){}
    addBook()
    {
        let b=new Book(this.bname,this.contents);
        this.bservice.addBook(b);
        
    }
}
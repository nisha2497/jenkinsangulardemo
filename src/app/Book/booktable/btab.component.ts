import { from } from 'rxjs';
import {Component} from '@angular/core';
import { BookService } from 'src/service/bookservice';
import { Book } from 'src/model/book';

@Component({
    selector:"btable",
    templateUrl:'./btab.component.html',
    styleUrls:['./btab.component.css']
})

export class BookTableComponent
{
    bname:string;
    contents:string;
    barr:Book[];

    constructor(private bservice:BookService){}

    ngOnInit()
    {
        console.log("this is ptable ngOnInt");
        this.barr=this.bservice.getAllBooks();
        console.log(this.barr);
    }
}
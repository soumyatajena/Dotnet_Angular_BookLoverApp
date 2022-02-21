import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BOOK-LOVER';
  books:any;
  constructor(private http:HttpClient){}

  ngOnInit(){
    this.getAllBooks();
  }

  getAllBooks()
  {
    this.http.get('https://localhost:5001/api/books').subscribe(response=>
    {
      this.books=response;
    },
    error=>
    {
      console.log(error);
    });
    
  }
}

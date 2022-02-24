import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/_services/account.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BOOK-LOVER';
  books:any;
  users:any;
  constructor(private http:HttpClient,private accountService:AccountService){}

  ngOnInit(){
    this.getAllBooks();
    this.getAllUsers();
    this.setCurrentUser();
  }

  setCurrentUser()
  {
    const user:User=JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }
  getAllUsers()
  {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next:(response)=>
    {
      this.users=response;
    },
    error:(error)=>
    {
      console.log(error);
    }
  });
    
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

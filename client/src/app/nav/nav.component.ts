import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AccountService } from 'src/_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedIn:boolean;
  constructor(private fb:FormBuilder,private accountService:AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }
  loginForm = this.fb.group({
    userName: [''],
    password: [''],
  });

  login() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
    this.accountService.login(this.loginForm.value).subscribe({
      next:(response)=>{
        console.log(response);
        this.loggedIn=true;
        console.log(this.loggedIn);
      },
      error:(error)=>
      {
        console.log(error);
      }
    });
  }

  getCurrentUser()
  {
    this.accountService.currentUser$.subscribe({
      next:(user)=>
      {
        this.loggedIn=!!user;
      },
      error:(error)=>
      {
        console.log(error);
      }
    });
  }

  logout()
  {
    this.accountService.logout();
    this.loggedIn=false;
  }
}

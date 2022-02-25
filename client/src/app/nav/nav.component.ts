import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { AccountService } from 'src/_services/account.service';
import { User } from '../models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 /** Modified with async pipe */
 // loggedIn:boolean;
 currentUser$:Observable<User>;

  constructor(private fb:FormBuilder,public accountService:AccountService) { }

  ngOnInit(): void {
    //this.getCurrentUser();
    //this.currentUser$=this.accountService.currentUser$;
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
        //this.loggedIn=true;
      },
      error:(error)=>
      {
        console.log(error);
      }
    });
  }

  /** Getting this logic from AccountService directly */
  // getCurrentUser()
  // {
  //   this.accountService.currentUser$.subscribe({
  //     next:(user)=>
  //     {
  //       this.loggedIn=!!user;
  //     },
  //     error:(error)=>
  //     {
  //       console.log(error);
  //     }
  //   });
  // }

  logout()
  {
    this.accountService.logout();
    //this.loggedIn=false;
  }
}

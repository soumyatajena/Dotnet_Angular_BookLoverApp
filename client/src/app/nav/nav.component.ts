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
  }
  loginForm = this.fb.group({
    userName: [''],
    password: [''],
  });
  login() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
    this.accountService.login(this.loginForm.value).subscribe(response=>
      {
        console.log(response);
        this.loggedIn=true;
        console.log(this.loggedIn);
      },
      error=>
      {
        console.log(error);
      });
  }
}

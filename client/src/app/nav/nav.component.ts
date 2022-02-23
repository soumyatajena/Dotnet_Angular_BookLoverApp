import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  loginForm = this.fb.group({
    userName: [''],
    password: [''],
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
  }
}

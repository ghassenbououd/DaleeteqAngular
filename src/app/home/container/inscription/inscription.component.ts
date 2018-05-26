import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  name: string;
  email: string;
  pwd: string;
  confirm: string;
  users: any = [{}];
  myform: FormGroup;

  constructor(private route: Router) {
  }

  ngOnInit() {
    this.myform = new FormGroup({
      forname: new FormControl('', Validators.required),
      foremail: new FormControl('', [Validators.email, Validators.required]),
      forpwd: new FormControl('', [Validators.required, Validators.minLength(8)]),
      forconfirmpwd: new FormControl('', [Validators.required, Validators.minLength(8)])

    });

    if (localStorage.getItem('users')) {
      this.users = JSON.parse(localStorage.getItem('users'));


    }
  }

  register() {
    let data = {

      Name: this.name,
      Email: this.email,
      Password: this.pwd
    };
    this.users.push(data);
    localStorage.setItem('user', JSON.stringify(this.users));
    this.route.navigate(['/']);

  }
}

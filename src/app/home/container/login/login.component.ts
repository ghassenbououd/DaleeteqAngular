import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  pwd: string;

  constructor(private  route: Router) {
  }

  ngOnInit() {
  }

  login() {
    let users: any = [];
    users = JSON.parse(localStorage.getItem('user'));
    console.log(users)
    for (let i = 0; i < users.length; i++) {
      if (users[i].Email == this.email && users[i].Password == this.pwd) {
        this.route.navigate(['/']);

      }

    }


  }
}

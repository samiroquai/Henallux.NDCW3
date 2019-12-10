import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  constructor(){}

  ngOnInit() {
  }

  login() {
   //TODO: implement this!
  }

  logout() {
  //TODO: implement this!
  }
}

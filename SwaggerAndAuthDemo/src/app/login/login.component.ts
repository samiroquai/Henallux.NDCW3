import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { JwtService } from '../api/services';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { AvailableRoutes } from '../AvailableRoutes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private jwtApi: JwtService, 
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      UserName: new FormControl(null, Validators.required),
      Password: new FormControl(null, Validators.required)
    });
  }

  login() {
    this.jwtApi.Login(this.loginForm.value)
      .subscribe(frm => {
        this.authenticationService.setToken(frm);
        this.router.navigate(['shops'])
      });
      //TODO :gérer erreur d'identification
  }
}

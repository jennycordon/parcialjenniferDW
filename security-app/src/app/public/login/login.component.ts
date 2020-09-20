//import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from './../../services/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    userName: '',
    password: ''
  }

  constructor(
    private security: SecurityService,
    private router: Router) { }

  ngOnInit(): void{
  }

  onLogin(): void {
    this.security.login(this.user).subscribe(
      (res) => {
        localStorage.setItem('token',res.token);
        this.router.navigate(['clientes']);
      }
    )
  }

}

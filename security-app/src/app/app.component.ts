import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from './services/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'security-app';

  constructor(
    private security: SecurityService,
    private router: Router
    ){

  }
  logedIn(){
    return this.security.logedIn ();
  }

  onLogout(){
    this.security.logout();
    this.router.navigate(['login']);
  }
}

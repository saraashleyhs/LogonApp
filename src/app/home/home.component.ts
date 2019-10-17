import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { longStackSupport } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
    logOut(){
      this.authService.logout();
      this.router.navigateByUrl("login");

    };
  

}

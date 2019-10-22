import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {}

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      email: "",
      password: ""
    });
  }
  onSubmit(logindata) {
    // Process checkout data here
    if(this.loginForm.invalid){
      return;
    }
    this.authService
    .login(logindata.email, logindata.password)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigateByUrl("../user-profile");
        },
        error => {
            console.log(error);
    });
    
  }
}

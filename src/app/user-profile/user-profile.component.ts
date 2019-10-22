import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfile: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userProfile = this.formbuilder.group({
      dateOfBirth: new FormControl(),
      homeAddress: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        zipcode: new FormControl()
      }),
      faveFood: new FormControl(),
      faveMovie: new FormControl(),
      faveArtist: new FormControl(),
      hobbies: new FormControl()
    });
  }

}

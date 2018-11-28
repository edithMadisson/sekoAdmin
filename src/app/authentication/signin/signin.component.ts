import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  providers: [AuthenticationService]
})
export class SigninComponent implements OnInit {
  message: string;
  submitted = false;
  returnUrl: string;
  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router,   private authenticationService: AuthenticationService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.form = this.fb.group ( {
      email: [null , Validators.compose ( [ Validators.required ] )] ,
       password: [null , Validators.compose ( [ Validators.required ] )]
    } );

  // reset login status
  this.authenticationService.logout();

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';


  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    this.message =     '';

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }


    this.authenticationService.login(this.f.email.value, this.f.password.value)
       .pipe( first())
        .subscribe((data) => {
            // alert('Te has logueado correctamente');
            this.router.navigate ( [ 'dashboard' ] );
             // console.log(data);
            },
            error => {
                this.message = error;

            });
}
}

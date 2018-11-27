import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
 import { CustomValidators } from 'ng2-validation';
 import { UserService } from '../../shared/services/user.service';
 import { User } from '../../shared/models/user';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  providers: [UserService]
})
export class SignupComponent implements OnInit {
  public user: User;
  message: string;
  public usuario_guardado;
  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router,   private _userService: UserService,  private _route: ActivatedRoute) {}

  ngOnInit() {
    console.log('register.component cargado !!');

    this.form = this.fb.group( {
      email: [null , Validators.compose ( [ Validators.required ] )],
      password: password,
      confirmPassword: confirmPassword
    } );
  }

  onSubmit() {
   //  this.router.navigate( ['/'] );


    const user = this.form.value.user;

    this._userService.register(user).subscribe( (response) => {
        this.usuario_guardado = response;

      },
     error => {
      this.message = error;
      console.error( <any> error );
      }
    );
  }

}

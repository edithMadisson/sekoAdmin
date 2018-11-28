import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';


import { UserService } from '../../shared/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  providers: [UserService]
})
export class ProfileComponent implements OnInit {
  public title: string;
   currentUser: any;
  public status;
  public user: User;

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.title = 'UPDATE DATA';

   }

  ngOnInit() {

    console.log('user-detail.component.ts cargado correctamente!!' );
  }

  onSubmit() {


    this.userService.updateUser(this.user).subscribe(
    reponse => {
    },
error => {
// tslint:disable-next-line:prefer-const
let errorMessage = <any>error;
if (errorMessage != null) {
  this.status = 'error';
}
}

  );
  }

}

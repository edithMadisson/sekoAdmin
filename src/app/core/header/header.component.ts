import { Component, EventEmitter, Output, Input } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../shared/services/authentication.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  currentUser: User;

  @Input() heading: string;
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() openSearch = new EventEmitter<void>();
  @Output() toggleFullscreen = new EventEmitter<void>();

  constructor(private authenticationService: AuthenticationService,
    private _route: ActivatedRoute,
    private _router: Router

  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }




  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this._router.navigate(['/authentication/signin']);
}

}

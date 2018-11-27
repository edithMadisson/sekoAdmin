import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';
import { GLOBAL } from '../global';

@Injectable()
export class AuthenticationService {
  public url: string;
 public identity;
  public token;

    constructor(private http: HttpClient, private route: ActivatedRoute,
        private router: Router, ) {
      this.url =  GLOBAL.url;

     }

    login(username: string, password: string) {
        return this.http.post<any>(this.url + 'login', {email: username, password: password })

            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user.data && user.data.token ) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user.data));

                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
       // this.router.navigate(['/login']);

    }




}



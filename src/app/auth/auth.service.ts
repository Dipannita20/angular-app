import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

interface SignupCredentials {
  username: string,
  password: string,
  passwordConfirmation: string
}

interface SignupResponse {
  username: string
}

interface SignedInResponse {
  authenticated: boolean,
  username: string
}

interface SigninCredentials {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootUrl = 'https://api.angular-email.com/';

  singnedin$ = new BehaviorSubject(null);
  username ='';

  constructor(private http: HttpClient) { }

  userNameVailable(username: string) {
    return this.http.post<{ available: boolean }>(this.rootUrl+'auth/username',{
      username: username
    });
  }

  signup(credentials: SignupCredentials){
    return this.http.post<SignupResponse>(
      this.rootUrl+'auth/signup',
      credentials
      ).pipe(
        tap(({ username }) => {
          this.singnedin$.next(true);
          this.username = username;
        })
      );
  }

  checkAuth(){
    return this.http.get<SignedInResponse>(this.rootUrl + "auth/signedin").pipe(
      tap(({ authenticated, username }) => {
        this.singnedin$.next(authenticated);
        this.username = username;
      })
    );
  }

  signout(){
    return this.http.post(
      this.rootUrl+'auth/signout',{}).pipe(
        tap(() => {
          this.singnedin$.next(false);
        })
      );
  }

  signin(credentials: SigninCredentials){
    return this.http.post<SignupResponse>(
      this.rootUrl+'auth/signin',
      credentials
      ).pipe(
        tap(({ username }) => {
          this.singnedin$.next(true);
          this.username = username
        })
      );
  }

}

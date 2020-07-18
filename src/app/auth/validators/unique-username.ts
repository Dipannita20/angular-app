import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({providedIn: 'root'})
export class UniqueUsername implements AsyncValidator {
   
    constructor(private authService: AuthService){}
   
    validate = (control: FormControl) => {

        const { value }  = control;

        return this.authService.userNameVailable(value).pipe(
            map(() => {
                return null;
            }),
            catchError((err) => {
                if(err.error.username){
                    return of({ nonUniqueUsername: true }) //of is to cretae new observalble
                }else {
                    return of({ noConnection: true })
                }
            })
        )    
    };
}

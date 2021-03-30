import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { catchError} from "rxjs/operators"
import {throwError} from "rxjs";
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ContactService{
  msg = new Subject<boolean>();

  constructor(private http: HttpClient){}

  submit(fname: string, lname:string, email:string, comments:string){
    return this.http.post('https://portfolio-angular-38ac9-default-rtdb.europe-west1.firebasedatabase.app/contact.json',{fname:fname, lname:lname,email:email, comments:comments}).
    pipe(catchError(error=>{
      return throwError(error)
    })).
    subscribe((responseData)=>{
      this.msg.next(true);
    }, error=>{
      this.msg.next(false);
    })
  }

}

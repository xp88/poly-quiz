import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor( private http:HttpClient ) {}
  signUp(username:string,pass:string){
    return ;
  }
  signIn(username:string,pass:string){
  }
}

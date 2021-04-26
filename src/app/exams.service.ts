import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  constructor(private  httpClient:HttpClient) { }
  
  getAllSubjects(){
    return this.httpClient.get('assets/db/Subjects.js');
  }

  getAllStudents(){
    return this.httpClient.get('assets/db/Students.js');
  }
}

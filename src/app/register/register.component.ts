import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExamsService } from '../exams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  students: any;

  constructor(private examsService:ExamsService, private router: Router) { }

  ngOnInit(): void {
    this.examsService.getAllStudents().subscribe(students=>{
      this.students = students;
    });
  }

  onSubmit(form: NgForm) {
    let username=form.value.username;
    let password=form.value.password;
    let fullname=form.value.fullname;
    let email=form.value.email;
    this.students.push({
      "username": username,
      "password": password,
      "fullname": fullname,
      "email": email,
      "gender": "true",
      "birthday": "2000-01-01",
      "schoolfee": "0",
      "marks": "0"
  });
  this.router.navigate(['/subject']);
  }

}

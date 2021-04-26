import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { ExamsService } from '../exams.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  students: any;

  constructor(private examsService:ExamsService, private authService:AuthserviceService, private router: Router) { }

  ngOnInit(): void {
    this.examsService.getAllStudents().subscribe(students=>{
      // console.log(students);
      this.students = students;
    });
  }

  onSubmit(form: NgForm) {
    let username=form.value.username;
    let password=form.value.password;
    this.students.forEach(element => {
      if (element.username == username && element.password == password) {
        this.router.navigate(['/subject']);
      } else if (element.username == username && element.password != password) {
        alert("Sai mật khẩu");
      } else if (element.username != username) {
        alert("Tài khoản không tồn tại");
      }
    });
  }
}

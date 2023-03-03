import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  email:string;
  password:string;
  user:User
  constructor(private router:Router, private blogService:BlogService) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }

  onFormSubmit(){
    console.log(this.loginForm.value);
    this.email=this.loginForm.value.email;
    this.password=this.loginForm.value.password

    this.blogService.login(this.email,this.password).subscribe(data=>{
      console.log(data);
      
      this.user=data['data']['user'];
      console.log(this.user);
      
    })
    
  }

}

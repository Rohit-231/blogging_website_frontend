import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  name:string;
  email:string;
  password:string;
  passwordConfirm:string;
  // user:User;
  constructor(private router:Router, private blogService:BlogService) { }

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      passwordConfirm:new FormControl('',[Validators.required])

    })
  }

  onFormSubmit(){
    console.log(this.signupForm.value);

    this.blogService.signup(this.signupForm.value.name,this.signupForm.value.email,this.signupForm.value.password,this.signupForm.value.passwordConfirm).subscribe(data=>{
      console.log(data);      
    })
    
  }

}

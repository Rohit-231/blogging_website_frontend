import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../model/blog.model';
import {Observable} from 'rxjs';
import { User } from '../model/user.model';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  allblogApi='https://cloudy-wig-seal.cyclic.app/api/v1/blogs';
  loginApi='https://cloudy-wig-seal.cyclic.app/api/v1/users/login'
  signupApi='https://cloudy-wig-seal.cyclic.app/api/v1/users/signup'
  getUserApi='https://cloudy-wig-seal.cyclic.app/api/v1/users/'
  postNewBlogApi='https://cloudy-wig-seal.cyclic.app/api/v1/blogs';
  



  constructor(private http:HttpClient) { }

  getAllBlog():Observable<Blog[]>{
    return this.http.get<Blog[]>(this.allblogApi);
  }
  login(email:string,password:string):Observable<User>{
    let encodedString = email+':'+password;
    console.log(encodedString);
    
    let httpOptions={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'basic',
        'email':email,
        'password':password
      })
    };
    return this.http.post<User>(this.loginApi,{email,password});
  }

  signup(name:string,email:string,password:string,passwordConfirm:string):Observable<any>{
    console.log(email+password);
    
    let encodedString = email+':'+password;
    console.log(encodedString);
    
    let httpOptions={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'basic',
        'name':name,
        'email':email,
        'password':password,
        'passwordConfirm':passwordConfirm

      })
    };
    return this.http.post<any>(this.signupApi,{name,email,password,passwordConfirm});
  }

  getUserById(user_id:string):Observable<any>{
    return this.http.get<any>(this.getUserApi+user_id);
  }

  postNewBlog(blogObj:Object):Observable<Blog>{
    return this.http.post<Blog>(this.postNewBlogApi,blogObj);
  }
}

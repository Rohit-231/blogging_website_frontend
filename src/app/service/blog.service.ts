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
        'Authorization':'basic'+encodedString
      })
    };
    return this.http.post<User>(this.loginApi,httpOptions);
  }
}

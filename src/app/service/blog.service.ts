import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../model/blog.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  allblogApi='https://cloudy-wig-seal.cyclic.app/api/v1/blogs';


  constructor(private http:HttpClient) { }

  getAllBlog():Observable<Blog[]>{
    return this.http.get<Blog[]>(this.allblogApi);
  }
}

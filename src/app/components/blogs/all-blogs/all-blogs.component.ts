import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/model/blog.model';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {

  allBlog:Blog[];
  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllBlog().subscribe(data=>{
      this.allBlog=data['data']['allBlogs'];
      console.log(this.allBlog);
      
    })
  }

}

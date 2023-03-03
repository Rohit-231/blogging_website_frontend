import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Blog } from 'src/app/model/blog.model';
import { BlogService } from 'src/app/service/blog.service';


@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  newBlogForm:FormGroup;
  newBlog:object;

  title:string;
  main_pic:string;
  author_name:string;
  author_pic:string;
  duration:number;
  body_content:string;

  constructor( private blogService:BlogService) { }

  ngOnInit(): void {
    this.newBlogForm=new FormGroup({
      title:new FormControl('',[Validators.required]),
      main_pic:new FormControl('',[Validators.required]),
      author_name:new FormControl('',[Validators.required]),
      author_pic:new FormControl('',[Validators.required]),
      duration:new FormControl('',[Validators.required]),
      body_content:new FormControl('',[Validators.required])
      
    })
  }
  onFormSubmit(){
    console.log(this.newBlogForm.value.title);
    this.title=this.newBlogForm.value.title;
    this.newBlog={
      title:this.title,
      main_pic:this.main_pic,
      author_name:this.author_name,
      author_pic:this.author_pic,
      duration:this.duration,
      body_content:this.body_content
    }

    this.blogService.postNewBlog(this.newBlog).subscribe(data=>{
      console.log(data);
      
    })
    
  }

}

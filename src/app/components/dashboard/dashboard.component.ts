import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userData:User;
  user_id:string;
  constructor( private blogService:BlogService) { }

  ngOnInit(): void {
    this.user_id=localStorage.getItem('user_id')
    this.blogService.getUserById(this.user_id).subscribe(data=>{
      console.log(data);

      this.userData=data['data']['user']
      console.log(this.userData);
      
      
    })
  }

}

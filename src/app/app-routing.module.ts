import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBlogsComponent } from './components/blogs/all-blogs/all-blogs.component';
import { CreateBlogComponent } from './components/blogs/create-blog/create-blog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'', component:AllBlogsComponent},
  {path:'allblogs', component:AllBlogsComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'create-blog', component:CreateBlogComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

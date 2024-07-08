import { ExamListComponent } from './exam-list/exam-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ClassComponent } from './class/class.component';
import { AllStudentsComponent } from './students-components/all-students/all-students.component';
import { StudentsComponent } from './admin componeents/students/students.component';
import { AdminComponent } from './admin componeents/admin/admin.component';
import { TeachersComponent } from './admin componeents/teachers/teachers.component';
// import { HomeComponent } from './home/home.component';

const routes: Routes = [


  { path: '', pathMatch: 'full', redirectTo: 'admin' },
  {
    path:'header',component:HeaderComponent
  },
  {
    path:'sidenav',component:SidenavComponent
  },
 {
  path:'admin',component:AdminComponent
 },
 {
  path:'student',component:StudentsComponent
 },
 {
  path:'teacher',component:TeachersComponent
 },
 {
  path:'allstudents',component:AllStudentsComponent
 },
 {
  path:'exam-list',component:ExamListComponent
 },
 {
  path:'class',component:ClassComponent
 }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

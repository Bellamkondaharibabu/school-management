import {
  IgxCategoryChartModule,
  IgxLegendModule,
} from 'igniteui-angular-charts';
// import { NgChartsModule } from 'ng2-charts';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

import { ExamListComponent } from './exam-list/exam-list.component';
import { ClassComponent } from './class/class.component';
// import { NgChartsModule } from 'ng2-charts';
import { AdminComponent } from './admin componeents/admin/admin.component';
import { StudentsComponent } from './admin componeents/students/students.component';
import { TeachersComponent } from './admin componeents/teachers/teachers.component';
import { AllStudentsComponent } from './students-components/all-students/all-students.component';
import { StudentDetailsComponent } from './students-components/student-details/student-details.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    LayoutComponent,
    PagenotfoundComponent,
    AdminComponent,
    StudentsComponent,
    TeachersComponent,
    AllStudentsComponent,
    ExamListComponent,
    ClassComponent,
    StudentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    // NgChartsModule,
    CommonModule,
    BaseChartDirective,
  ],
  providers: [provideClientHydration(),
     provideCharts(withDefaultRegisterables())],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//import { routes } from './app-routes'; 
import { TestComponent } from '../component/Test.component';
import { Test1Component } from '../component1/Test1.component';
import { Test2Component } from '../component2/Test2.component';
import { ToggleButtonComponent } from '../toggle-button/toggle-button.component';

const routes: Routes = [
  { path: 'component', component: TestComponent },
  { path: 'component1', component: Test1Component },
  { path: 'component2', component: Test2Component },
  
];
@NgModule({
  declarations: [
    ToggleButtonComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) // Configure root router module with routes
  ]
})
export class AppModule { }

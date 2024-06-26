import { Routes } from '@angular/router';
import { TestComponent } from './component/Test.component';
import { Test1Component } from './component1/Test1.component';
import { Test2Component } from './component2/Test2.component';
import { NotfoundComponent } from './notfound/notfound.component'; 

export const routes: Routes = [
    { path: 'component', component: TestComponent },
    { path: 'component1', component: Test1Component },
    { path: 'component2', component: Test2Component },
    { path: '**', component: NotfoundComponent } 
];


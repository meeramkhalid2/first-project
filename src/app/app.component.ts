import { Component,Input,Output,EventEmitter } from '@angular/core';
import { RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TestComponent} from './component/Test.component';
import { Test1Component } from './component1/Test1.component';
import { Test2Component } from './component2/Test2.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { Togglebutton1Component } from './togglebutton1/togglebutton1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ToggleButtonComponent,Togglebutton1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-dream-app';
 // @Input() initialState: boolean=false;
  //@Output() stateChanged = new EventEmitter<boolean>(false);

 
  active = false;  //private active = false; it is public by default

  handleStateChanged(newState: boolean): void{
    this.active = !this.active;
  }
}



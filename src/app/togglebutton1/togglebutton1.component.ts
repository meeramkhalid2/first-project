import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-togglebutton1',
  standalone: true,
  imports: [],
  templateUrl: './togglebutton1.component.html',
  styleUrl: './togglebutton1.component.css'
})
export class Togglebutton1Component {

  @Input() active: boolean=false;
  @Output() stateChanged = new EventEmitter<boolean>(false);

 
  toggleState():void {
    this.stateChanged.emit(this.active); 
  }
}

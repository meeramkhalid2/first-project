import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.css'
})
export class ToggleButtonComponent {

  @Input() active: boolean=false;
  @Output() stateChanged = new EventEmitter<boolean>(false);

 
  toggleState():void {
    this.stateChanged.emit(this.active); 
  }
}

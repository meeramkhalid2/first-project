import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [],
  templateUrl: './component.component.html',
  styleUrl: './component.component.css'
})
export class TestComponent {
  @Input() initialState: boolean=false;
  @Output() stateChanged = new EventEmitter<boolean>(false);

 
  active = false;  //private active = false; it is public by default

  toggleState():void {
    this.active = !this.active;
    this.stateChanged.emit(this.active); //
  }
}

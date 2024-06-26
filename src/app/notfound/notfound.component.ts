import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css',
  template: `
  <h1>Page Not Found</h1>
  <p>The page you are looking for does not exist.</p>
`,
styles: [
  `
    h1 {
      color: red;
    }
  `
]
})
export class NotfoundComponent {

}

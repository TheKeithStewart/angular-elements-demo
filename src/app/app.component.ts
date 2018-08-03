import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  options = JSON.stringify([
    { value: '1', viewValue: 'Value 1' },
    { value: '2', viewValue: 'Value 2' },
    { value: '3', viewValue: 'Value 3' }
  ]);
}

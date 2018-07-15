import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  questions = [
    {
      value: 'Bombasto',
      key: 'firstName',
      label: 'First name',
      required: true,
      order: 1,
      controlType: 'textbox',
      type: ''
    },
    {
      key: 'emailAddress',
      label: 'Email',
      required: false,
      order: 2,
      controlType: 'textbox',
      type: 'email'
    },
    {
      key: 'brave',
      label: 'Bravery Rating',
      required: false,
      order: 3,
      controlType: 'dropdown',
      options: [
        { key: 'solid', value: 'Solid' },
        { key: 'great', value: 'Great' },
        { key: 'good', value: 'Good' },
        { key: 'unproven', value: 'Unproven' }
      ]
    }
  ];

  getQuestions() {
    return JSON.stringify(this.questions);
  }
}

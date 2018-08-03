import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  questions = JSON.stringify([
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
  ]);

  constructor() { }

  ngOnInit() {
  }

}

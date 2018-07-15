import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form (payload)="onSubmit($event)" [questions]="_questions"></app-dynamic-form>
    </div>
  `
})
export class AppComponent {
  _questions: any[] = [];
  @Input()
  set questions(questions) {
    this._questions = JSON.parse(questions);
  }

  @Output() payload = new EventEmitter();

  constructor() {}

  onSubmit(payload) {
    this.payload.emit(payload);
  }
}

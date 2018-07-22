import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
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

import { Component } from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions"></app-dynamic-form>
    </div>
  `,
  providers: [QuestionService]
})
export class AppComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}

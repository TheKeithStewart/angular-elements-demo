import { Component, Input, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../models/question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  detectChanges() {
    this.changeDetectorRef.detectChanges();
  }
}

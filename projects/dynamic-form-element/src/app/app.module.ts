import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('dynamic-form-element', el);
  }
}

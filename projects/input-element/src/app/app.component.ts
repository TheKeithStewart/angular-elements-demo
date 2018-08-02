import { Component, ViewEncapsulation, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @Input() value = '';
  @Input() placeholder: string;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  detectChanges() {
    this.changeDetectorRef.detectChanges();
  }
}

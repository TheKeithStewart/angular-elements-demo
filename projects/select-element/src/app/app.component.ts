import { Component, ViewEncapsulation, Input, ChangeDetectorRef, ViewChild, OnInit } from '@angular/core';
import { MatSelect, MatSelectChange } from '@angular/material/select';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @Input() placeholder: string;

  _options: { value: string, viewValue: string }[];
  @Input()
  set options(options) {
    this._options = JSON.parse(options);
  }

  @ViewChild('control') select: MatSelect;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.select.open();
    this.detectChanges();
  }

  detectChanges() {
    this.changeDetectorRef.detectChanges();
  }

  handleOpenChanged() {
    this.select._offsetY = 1;
  }
}

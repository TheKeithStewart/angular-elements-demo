import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() placeholder: string;
  @Input() options: string;

  constructor() { }

  ngOnInit() {
  }

}

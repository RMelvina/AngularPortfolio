import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  // Input
  @Input() webP: any;
  @Input() title: any;

  // Output
  @Output() closeDialog = new EventEmitter();


  constructor() {}

  ngOnInit(): void {}
}

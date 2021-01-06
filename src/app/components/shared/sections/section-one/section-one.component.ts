import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.css'],
})
export class SectionOneComponent implements OnInit {
  // Input
  @Input() title!: any;
  @Input() btnTitle!: any;
  @Input() array:any;
  @Input() href!: any;
  @Input() btnName: any;

  constructor() {}

  ngOnInit(): void {}
}

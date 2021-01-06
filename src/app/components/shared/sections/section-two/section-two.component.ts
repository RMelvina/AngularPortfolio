import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.css'],
})
export class SectionTwoComponent implements OnInit {
  // Inputs
  @Input() lines!: any[];
  @Input() classContainer!: any;
  @Input() title!: any;
  @Input() descArray!: any[];
  @Input() classDesc!: any;
  @Input() descOne!: any;
  @Input() descTwo!: any;
  @Input() classColOne!: any;
  @Input() classColTwo!: any;
  constructor() {}

  ngOnInit(): void {}
}

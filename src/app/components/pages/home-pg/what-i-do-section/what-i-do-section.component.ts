import { Component, OnInit } from '@angular/core';
import {whatIDo} from '../../../shared/arrays/infomation'

@Component({
  selector: 'app-what-i-do-section',
  templateUrl: './what-i-do-section.component.html',
  styleUrls: ['./what-i-do-section.component.css']
})
export class WhatIDoSectionComponent implements OnInit {

  arrays = whatIDo;


  constructor() { }

  ngOnInit(): void {
  console.log(window.scroll());
  }

}

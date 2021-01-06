import { Component, OnInit } from '@angular/core';
import {
  skillsListOne,
  skillsListTwo,
} from '../../../shared/arrays/skills';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css'],
})
export class SkillsSectionComponent implements OnInit {
  skillsListOne = skillsListOne;
  skillsListTwo = skillsListTwo;

  constructor() {}

  ngOnInit(): void {}
}

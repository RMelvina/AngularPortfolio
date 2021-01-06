import { Component, OnInit } from '@angular/core';
import { AboutSectionComponent } from './about-section/about-section.component';
import { navbarItems } from '../../shared/arrays/navbarItems';

@Component({
  selector: 'app-home-pg',
  templateUrl: './home-pg.component.html',
  styleUrls: ['./home-pg.component.css'],
})
export class HomePgComponent implements OnInit {
  navbarHomeItems = navbarItems;

  constructor() {}

  ngOnInit(): void {}

  toSections(url:any) {
    document.getElementById(url)?.scrollIntoView({ behavior: 'smooth' });
  }

  toHome(items:any){
    console.log(items + ' Iam clicked');
  }
}

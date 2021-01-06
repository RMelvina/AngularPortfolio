import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common';
import { HomePgComponent } from '../../pages/home-pg/home-pg.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component'
import { AboutSectionComponent } from '../../pages//home-pg/about-section/about-section.component';
import { TopSectionComponent } from '../../pages//home-pg/top-section/top-section.component';
import { SkillsSectionComponent } from '../../pages/home-pg/skills-section/skills-section.component';
import {WhatIDoSectionComponent} from '../../pages/home-pg/what-i-do-section/what-i-do-section.component';
import { ProjectsSectionComponent } from '../../pages/home-pg/projects-section/projects-section.component';
import { ContactSectionComponent } from '../../pages/home-pg/contact-section/contact-section.component';
import { MobileProjectsComponent } from '../../pages/home-pg/projects-section/mobile-projects/mobile-projects.component';
import { DetailsPgComponent } from '../../pages/details-pg/details-pg.component'  
import { SectionOneComponent } from '../../shared/sections/section-one/section-one.component';
import { SectionTwoComponent } from '../../shared/sections/section-two/section-two.component';
import { SectionThreeComponent } from '../../shared/sections/section-three/section-three.component';
import { ShowAllProjectsComponent } from '../../pages/home-pg/projects-section/show-all-projects/show-all-projects.component';

const components = [
    HomePgComponent,
    NavbarComponent,
AboutSectionComponent,
TopSectionComponent,
SkillsSectionComponent,
WhatIDoSectionComponent,
ProjectsSectionComponent,
ContactSectionComponent,
MobileProjectsComponent,
DetailsPgComponent,
SectionOneComponent,
SectionTwoComponent,
SectionThreeComponent,
ShowAllProjectsComponent
]


@NgModule({
  declarations: [],
  exports: [components],
})
export class ComponentsModule {}

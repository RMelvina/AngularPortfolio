import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialsModule} from './components/modules/materials/materials.module'
import {RouterModule} from '@angular/router'
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePgComponent } from './components/pages/home-pg/home-pg.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutSectionComponent } from './components/pages/home-pg/about-section/about-section.component';
import { TopSectionComponent } from './components/pages/home-pg/top-section/top-section.component';
import { SkillsSectionComponent } from './components/pages/home-pg/skills-section/skills-section.component';
import {WhatIDoSectionComponent} from './components/pages/home-pg/what-i-do-section/what-i-do-section.component';
import { ProjectsSectionComponent } from './components/pages/home-pg/projects-section/projects-section.component';
import { ContactSectionComponent } from './components/pages/home-pg/contact-section/contact-section.component';
import { MobileProjectsComponent } from './components/pages/home-pg/projects-section/mobile-projects/mobile-projects.component';
import { DetailsPgComponent } from './components/pages/details-pg/details-pg.component'  
import { SectionOneComponent } from './components/shared/sections/section-one/section-one.component';
import { SectionTwoComponent } from './components/shared/sections/section-two/section-two.component';
import { SectionThreeComponent } from './components/shared/sections/section-three/section-three.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';

import { ShowAllProjectsComponent } from './components/pages/home-pg/projects-section/show-all-projects/show-all-projects.component';
import { CardComponent } from './components/shared/components/card/card.component';
import { DeclarationComponent } from './components/declaration/declaration.component';
import { WebSectionsComponent } from './components/shared/components/web-sections/web-sections.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePgComponent,
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
    CarouselComponent,
    
    ShowAllProjectsComponent,
    
    CardComponent,
    
    DeclarationComponent,
    
    WebSectionsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    Ng2PageScrollModule,
    HttpClientModule,
    // #about
    // RouterModule.forRoot([
    //   { path: '', component: HomePgComponent },
    //   { path: 'home', component: HomePgComponent },

    //   {
    //     path: 'details/:pId',
    //     component: DetailsPgComponent,
    //   },
    // ]),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

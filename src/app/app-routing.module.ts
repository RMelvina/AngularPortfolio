import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPgComponent } from './components/pages/details-pg/details-pg.component';
import { AboutSectionComponent } from './components/pages/home-pg/about-section/about-section.component';
import { HomePgComponent } from './components/pages/home-pg/home-pg.component';
import { TopSectionComponent } from './components/pages/home-pg/top-section/top-section.component';
import { SectionOneComponent } from './components/shared/sections/section-one/section-one.component';
import { SectionTwoComponent } from './components/shared/sections/section-two/section-two.component';
import { SectionThreeComponent } from './components/shared/sections/section-three/section-three.component';

const routes: Routes = [
  { path: '', component: HomePgComponent },

  // { path: 'home', component: HomePgComponent }, { scrollPositionRestoration: 'disabled' }

  {
    path: 'details/:pId',
    component: DetailsPgComponent,
    // children: [
    //   {
    //     path: 'sectionOne',
    //     component: DetailsPgComponent,
    //   },
    // ],
  },
];


@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { event } from 'jquery';
import {
  projectDetails,

} from '../../shared/arrays/projects/projectsDetails';
import { navbarItems, navbarItemsQCA } from '../../shared/arrays/navbarItems';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-details-pg',
  templateUrl: './details-pg.component.html',
  styleUrls: ['./details-pg.component.css'],
})
export class DetailsPgComponent implements OnInit {
  // Declaretion
  projectDetail: any;
  classContainer: any;
  arrayOne = projectDetails;

  navbarItems = navbarItemsQCA;
  isShow!: boolean;
  arrayTwo: any;
  projectId: any;
  id: any;
  isScrolled = false;

  shown: any;
  // this.projectDetail = projectDetails.concat(projectDetails2)[+params.get('projectId')!]
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // console.log(this.route.url);
    // this.route.paramMap.subscribe((params) => {
    //   return (this.projectDetail = projectDetails[+params.get('pId')!]);
    // });

    // const projectDetailId = this.route.snapshot.paramMap.get('pId');

    this.route.paramMap.subscribe((params) => {
      console.log(params);
      window.scrollTo(0, 0);
      return (this.projectDetail = projectDetails.find((p) => {
        return (this.id = p.id === Number(+params.get('pId')!));
      }));
    });

    // .concat(webProjects)

    // window.scrollTo(0, 0);
    // this.closeD();

    // this.currentUrl = navbarItems.find(p => {
    //   return p.url + projectDetailId;
    // })

    // this.currentUrl = this.router.url;
    // this.router.events.subscribe((val) => {
    //   this.currentUrl = this.router.url;
    // })
    //   const projectDetailId =

    //  this.projectDetail = projectDetails.find((p) => {
    //   return p.id === Number(projectDetailId);
    // });
  }
  @HostListener('window:scroll')
  scrollEvent() {
    window.pageYOffset > 20
      ? (this.isScrolled = true)
      : (this.isScrolled = false);

    
  }

  toHome() {
    document.getElementById('sectionTwo')?.scrollIntoView;
  }

  goToLink() {
    // let selectedId = this.id ? this.id : null;
    var s = this.router.navigate(['details'], { relativeTo: this.route });
    console.log(s);
  }

  scrollUp() {
    window.scrollTo(0, 0);
  }
  nextBtn() {
    let id = parseInt(this.route.snapshot.paramMap.get('pId')!);
    this.projectId = id;
    let next = this.projectId + 1;

    if (this.projectId != projectDetails.length) {
      this.router.navigate(['/details', next]);
    }
  }

  prevBtn() {
    let idd = parseInt(this.route.snapshot.paramMap.get('pId')!);
    this.projectId = idd;
    let prev = this.projectId - 1;
    if (this.projectId != 1) {
      this.router.navigate(['/details', prev]);
    } else {
    }
  }
}

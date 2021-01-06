import { Component, OnInit } from '@angular/core';
import { arrayOne } from '../../../../shared/arrays/projects/mobile';
import { carousel } from '../../../../shared/functions/carousel';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ShowAllProjectsComponent } from '../../projects-section/show-all-projects/show-all-projects.component';

// export interface DialogData {
//   img: string;
//   title: string;
// }

@Component({
  selector: 'app-mobile-projects',
  templateUrl: './mobile-projects.component.html',
  styleUrls: ['./mobile-projects.component.css'],
})
export class MobileProjectsComponent implements OnInit {
  //  Declaration
  isShow!: boolean;

  // Array
  mobileProjects = arrayOne;

  carousel = carousel;

  img: any;
  title: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    
  }
  showAll() {
    // this.isShow = !this.isShow;
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ShowAllProjectsComponent, {
      // width: '400px',
      panelClass: 'show-all',
      // closeOnNavigation: true,
      data: { projects: this.mobileProjects },
    });
  }
}

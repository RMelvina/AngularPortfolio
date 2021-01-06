import { Component, OnInit, Input } from '@angular/core';
import {MobileProjectsComponent} from '../mobile-projects/mobile-projects.component'
import { projects, heading } from '../../../../shared/arrays/projects/projects';
import { carousel } from '../../../../shared/functions/carousel';
import {DetailsPgComponent} from '../../../details-pg/details-pg.component'
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-show-all-projects',
  templateUrl: './show-all-projects.component.html',
  styleUrls: ['./show-all-projects.component.css'],
})
export class ShowAllProjectsComponent implements OnInit {
  //  Declarations
  title1 = 'Mobile Projects';
  title2 = 'Web Projects';
  webProjects = projects;
  headings = heading;
  // Input
  @Input() show!: boolean;

  constructor(
    public dialogRef: MatDialogRef<MobileProjectsComponent>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.show;
  }

  closeDialog() {
    this.dialogRef.close();

  }
}

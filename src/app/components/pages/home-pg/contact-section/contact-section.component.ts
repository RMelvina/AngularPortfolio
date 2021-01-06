import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { error } from 'jquery';
import { FormServiceService } from '../../../services/form-service.service';
import {iconsArray, icons} from '../../../shared/arrays/iconsList'

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css'],
})
export class ContactSectionComponent implements OnInit, AfterViewInit {
  // Decalatraion
  users: any;
  iconsArray = iconsArray;
  icons = icons;

  emailstring:any;
  // View child
  @ViewChild('input') input!: ElementRef;

  constructor(private formHttp: FormServiceService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // this.onSubmit();
  }
  // getUsers() {
  //   this.formHttp.getusers().subscribe(
  //     (users: any) => {
  //       this.users = users;
  //     },
  //     (err) => console.log(err)
  //   );
  // }
  onSubmit() {
    // const vv = this.input.nativeElement.value
    // const mail = 'mailto: melvinanraj@gmail.com';

    // 'mailto:melvinanraj@gmail.com?Subject=Hello&body=links:';

    // console.log(this.input.nativeElement.value);
    // const val = this.input.nativeElement.value;
    // this.formHttp.sendData(val).subscribe(
    //   (data) => console.log('Send', val),
    //   (error) => console.log(error)
    // );
  }
}

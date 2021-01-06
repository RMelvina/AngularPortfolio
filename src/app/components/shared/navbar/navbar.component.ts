import { Component, OnInit, Input, EventEmitter, Output, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';
import { ActivatedRoute, Router } from '@angular/router';
import {
  navbarItems,
  navbarItemsQCA,
  
} from '../arrays/navbarItems';
import { HostListener } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  isScrolled = false;
  color = 'spanFontColor';
  navbar = navbarItemsQCA;

  fragment: any;
  hovered!: boolean;
  isClicked!: boolean;
  icon: any;
  icon1 = 'fa fa-bars';
  // colorWhite:any

  // ViewChild
  @ViewChild('navLink') navLink!: ElementRef;
  //Input
  // @Input() url: any;
  // @Input() name: any;
  @Input()
  navbarI: any;
  @Input() showOne: any;
  @Input() showTwo: any;
  @Input() name: any;

  // Output
  @Output() prevsBtn = new EventEmitter();
  @Output() nextBtn = new EventEmitter();
  @Output() toSections = new EventEmitter<any>();

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    if (!this.isClicked) {
      this.icon = 'fa fa-bars';
    }
  }

  @HostListener('window:scroll')
  scrollEvent() {
    window.pageYOffset > 20
      ? (this.isScrolled = true)
      : (this.isScrolled = false);

    if (this.isScrolled) {
    }
  }

  ngAfterViewInit() {
    // if(this.isScrolled){
    //     this.navLink.nativeElement.style.color =
    //   }
    console.log(this.navLink);
  }
  getColor() {}

  toSection(url: any) {
    document.getElementById(url)?.scrollIntoView({ behavior: 'smooth' });
  }

  // toHome() {
  //   document.getElementById('about')?.scrollIntoView;
  // }
  // toAbout(){
  //    document.getElementById('about')?.scrollIntoView;
  // }

  // on(color:any){
  //   this.colorWhite = color;
  //   console.log("i am hovered") #ffffff
  // }
  openNavbar() {
    this.isClicked = !this.isClicked;
    this.icon = this.isClicked ? 'fa fa-times' : 'fa fa-bars';
  }
  
  clickFunction(a: any) { 
    if (a == 'nextBtn()') {
      this.nextBtn.emit();
    } else {
      this.prevsBtn.emit();
    }
  }
}


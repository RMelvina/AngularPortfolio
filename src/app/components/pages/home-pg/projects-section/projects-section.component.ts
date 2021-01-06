import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css'],
})
export class ProjectsSectionComponent implements OnInit {
  // Delcalration


  // View Childs
  @ViewChild('carouselItem') carouselItem!: ElementRef;
  @ViewChild('carouselInner') carouselInner!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    //  this.item.nativeElement.forEach((item:any) => {
    //    console.log("Item" + item)
    //  })
    // $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function () {
    //   var next = $(this).next();
    //   if (!next.length) {
    //     next = $(this).siblings(':first');
    //   }
    // next.children(':first-child').clone().appendTo($(this));
    // for (var i = 0; i < 3; i++) {
    //   next = next.next();
    //   if (!next.length) {
    //     next = $(this).siblings(':first');
    //   }
    //   next.children(':first-child').clone().appendTo($(this));
    // }
    // });
  }

  // ngAfterViewInit() {

  //   var next = this.carouselItem.nativeElement.nextSibling
  //   if(next){
  //     for(var i = 0; i < 3; i++){
  //       next.children(':first-child').clone().appendTo(this.carouselItem);
  //     }
  //   }

  //   console.log(this.carouselItem);
  // }
}

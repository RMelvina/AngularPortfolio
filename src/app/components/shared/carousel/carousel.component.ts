import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import  {carousel} from '../functions/carousel'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  // Inputs
  @Input() mobileProjects: any;
  @Input() pId: any;
  @Input() webIndicators!: boolean;
  @Input() mobileIndicators!: boolean;
  @Input() title: any;

  // Output
  @Output() showAll = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.mobile('.image');
  }

  mobile(img: any) {
    $(document).ready(function () {
      var getActiveSlideIndex = function () {
        return $('#mobileProjects .active').index(
          '#mobileProjects .carousel-item'
        );
      };

      var slider = function (IndexNumber: any) {
        $(`.slider ${img}`)
          .removeClass('active')
          .eq(IndexNumber)
          .addClass('active');
      };
      slider(getActiveSlideIndex());
      $('#mobileProjects').on('slid.bs.carousel', function () {
        slider(getActiveSlideIndex());
      });
    });
  }

  web(webImg: any) {
    $(document).ready(function () {
      var getActiveSlideIndex = function () {
        return $('#productSlider .active').index(
          '#productSlider .carousel-item'
        );
      };

      var slider = function (IndexNumber: any) {
        $(`.slider ${webImg}`)
          .removeClass('active')
          .eq(IndexNumber)
          .addClass('active');
      };
      slider(getActiveSlideIndex());
      $('#productSlider').on('slid.bs.carousel', function () {
        slider(getActiveSlideIndex());
      });
    });
  }
}

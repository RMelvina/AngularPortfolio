import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.css'],
})
export class SectionThreeComponent implements OnInit {
  // Inputs
  @Input() imgs!: any;
  

  // OutPut
  @Output() scrollUp = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  o() {
    // $('.owl-carousel').owlCarousel({
    //   loop: true,
    //   margin: 10,
    //   nav: true,
    //   responsive: {
    //     0: {
    //       items: 1,
    //     },
    //     600: {
    //       items: 3,
    //     },
    //     1000: {
    //       items: 5,
    //     },
    //   },
    // });
  }
  next() {
    var n = document.getElementsByClassName('slider');
    const $active = $(' .item.show');
    $(' .item.show').removeClass('show');
    $('.item').removeClass('next');
    $(' .item').removeClass('prev');
    $active.addClass('prev');
    if ($active.is('.last')) {
      $('.first').addClass('show');
      $('.first').parent().next().children('.item').addClass('prev');
    } else {
      $active.parent().next().children('.item').addClass('show');
      if ($active.parent().next().children('.item').is('.last')) {
        $('.owl-item .first').addClass('next');
      } else {
        $('.owl-item .show').parent().next().children('.item').addClass('next');
      }
    }
  }
  prev() {
    const $active = $('.item.show');
    $('.show').removeClass('show');
    $('.item').removeClass('next');
    $('.item').removeClass('prev');
    $active.addClass('next');
    if ($active.is('.first')) {
      $('.last').addClass('.show');
      $('.fist').addClass('.next');
      $('.last').parent().prev().children('.item').addClass('prev');
    }

    // var c = document.getElementById('show');
    // c.classList.add()

    // console.log(c)
  }
}

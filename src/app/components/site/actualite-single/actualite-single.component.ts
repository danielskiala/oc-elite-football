import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-actualite-single',
  templateUrl: './actualite-single.component.html',
  styleUrls: ['./actualite-single.component.css']
})
export class ActualiteSingleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  config_slider: SwiperOptions = {
    // npm install --save ngx-useful-swiper@latest swiper
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      1600: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1080: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1366: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 0,
      }
    },
    loop: true,
    speed: 4000,
  };
  
}

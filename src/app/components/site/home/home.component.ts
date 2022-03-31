import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  config_slider_player: SwiperOptions = {
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
        spaceBetween: 30,
      },
      1080: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1366: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 30,
      }
    },
    loop: true,
    speed: 4000,
    autoplay:true,
  };
}

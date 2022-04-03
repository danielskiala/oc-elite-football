import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    const body: any = document.querySelector('body');
    body.classList.remove('overflow');
    this.Scroll();
  }

  showNav() {
    const backLinks: any = document.querySelector('.back-links');
    const body: any = document.querySelector('body');

    body.classList.add('overflow');
    backLinks.classList.add('active');
  }

  hiddenNav() {
    const backLinks: any = document.querySelector('.back-links');
    const body: any = document.querySelector('body');

    body.classList.remove('overflow');
    backLinks.classList.remove('active');
  }

  Scroll() {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const nav: any = document.querySelector('.nav');
      const navResp: any = document.querySelector('.nav-head');

      if (scrolled > 30) {
        nav.classList.add('active');
        navResp.classList.add('active');
      } else {
        nav.classList.remove('active');
        navResp.classList.remove('active');
      }

      if (scrolled > 180) {
        nav.classList.add('translate');
        navResp.classList.add('translate');
      } else {
        nav.classList.remove('translate');
        navResp.classList.remove('translate');
      }
    })
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }
}

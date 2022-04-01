import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
}

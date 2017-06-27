import { Component, OnInit } from '@angular/core';

export interface ImageFiles {
  imageName: string;
  alt?: string;
  link?: string;
}

export interface CarouselConfigSettings {
  images ?: Array<ImageFiles>;
}

@Component({
  selector: 'app-welcome-carousel',
  templateUrl: './welcome-carousel.component.html',
  styleUrls: ['./welcome-carousel.component.css']
})
export class WelcomeCarouselComponent implements OnInit {

  constructor() {
    const carouselImages: CarouselConfigSettings = {
      images: [
        { imageName: 'assets/socialIcons/social-fb.png', alt: 'Facebook', link: 'http://www.facebook.com' },
        { imageName: 'assets/socialIcons/social-twitter.png', alt: 'Twitter', link: 'http://www.twitter.com' }
      ]
    };
  }

  ngOnInit() {
  }

}

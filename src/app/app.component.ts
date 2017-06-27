import { Component } from '@angular/core';
import { FrameworkConfigService, FrameworkConfigSettings } from '../framework/services/framework-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private frameworkConfigService: FrameworkConfigService) {
    const config: FrameworkConfigSettings = {
      socialIcons: [
        { imageFile: 'assets/socialIcons/social-fb.png', alt: 'Facebook', link: 'http://www.facebook.com' },
        { imageFile: 'assets/socialIcons/social-twitter.png', alt: 'Twitter', link: 'http://www.twitter.com' }
      ]
    };
    frameworkConfigService.configure(config);
  }
}

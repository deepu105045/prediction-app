import { Component } from '@angular/core';
import { FrameworkConfigService, FrameworkConfigSettings } from '../framework/services/framework-config.service';
import { MenuService } from 'framework/services/menu/menu.service';
import { initialMenuItems } from 'app/app-menu/app-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private frameworkConfigService: FrameworkConfigService, private menuService: MenuService) {
    const config: FrameworkConfigSettings = {
      socialIcons: [
        { imageFile: 'assets/socialIcons/social-fb.png', alt: 'Facebook', link: 'http://www.facebook.com' },
        { imageFile: 'assets/socialIcons/social-twitter.png', alt: 'Twitter', link: 'http://www.twitter.com' }
      ]
    };
    frameworkConfigService.configure(config);
    menuService.items = initialMenuItems;
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FrameworkConfigService } from './services/framework-config.service';

import { TitleBarComponent } from './title-bar/title-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ContentComponent } from './content/content.component';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { SigninComponent } from './users/sign-in/sign-in.component';
import { SignupComponent} from './users/signup/signup.component';
import { MenuService } from 'framework/services/menu/menu.service';
import { MenuComponent } from 'framework/menus/menu/menu.component';
import { MenuItemComponent } from 'framework/menus/menu-item/menu-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TitleBarComponent,
    TopBarComponent,
    ContentComponent,
    FrameworkBodyComponent,
    SigninComponent,
    SignupComponent,
    MenuComponent,
    MenuItemComponent

  ],
  providers: [
    FrameworkConfigService,
    MenuService
  ],
  exports: [
    FrameworkBodyComponent, TitleBarComponent
  ]
})
export class FrameworkModule { }

import { Injectable } from '@angular/core';


export interface IconFiles {
  imageFile: string;
  alt: string;
  link: string;
}

export interface FrameworkConfigSettings {
  socialIcons ?: Array<IconFiles>;
}

@Injectable()
export class FrameworkConfigService {
  configure(settings: FrameworkConfigSettings): void {
    Object.assign(this, settings);
  }

}

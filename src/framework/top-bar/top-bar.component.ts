import { Component, OnInit } from '@angular/core';
import { FrameworkConfigService } from '../services/framework-config.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private frameworkConfigService: FrameworkConfigService) { }

  ngOnInit() {
  }

}

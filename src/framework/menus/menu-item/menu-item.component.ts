import { Component, OnInit, Input } from '@angular/core';
import { MenuItem, MenuService } from 'framework/services/menu/menu.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

@Input() item= <MenuItem>null;
  constructor(private menuService: MenuService) { }
  ngOnInit() {
  }
}


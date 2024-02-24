import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public menuItems: any[];
  constructor(
    private _sideBarServ: SidebarService
  ){
    this.menuItems = _sideBarServ.menu;
  }
}

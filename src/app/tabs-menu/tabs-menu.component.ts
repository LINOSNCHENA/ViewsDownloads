import { Component } from '@angular/core';
import { DownloadsComponent } from "../lindat/downloads/downloads.component";
import { ViewsComponent } from "../lindat/views/views.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tabs-menu',
  standalone: true,
  imports: [DownloadsComponent, ViewsComponent,NgIf],
  templateUrl: './tabs-menu.component.html',
  styleUrl: './tabs-menu.component.css'
})
export class TabsMenuComponent {

  selectedTab: string = 'tab1';
  selectTab(tab: string) {
    this.selectedTab = tab;
    console.log(tab);
  }

}

import { Routes } from '@angular/router';
import { DownloadsComponent } from './lindat/downloads/downloads.component';
import { ViewsComponent } from './lindat/views/views.component';
import { TabsMenuComponent } from './tabs-menu/tabs-menu.component';
import { TotalsComponent } from './lindat/totals/totals.component';

export const routes: Routes = [
  { path: 'views', component: ViewsComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'totals', component: TotalsComponent },
  { path: 'tabs', component: TabsMenuComponent },
  { path: '', redirectTo: '/views', pathMatch: 'full' }
];

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { TopComponent } from './top/top.component';
import { IssueComponent } from './issue/issue.component';
import { IssueUpdateComponent } from './issue/issue-update/issue-update.component';

const pagesRoutes: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
      { path: '', component: TopComponent },
      { path: 'top', component: TopComponent },
      { path: 'issue', component: IssueComponent },
      { path: 'issue/update/:id', component: IssueUpdateComponent },
      { path: 'wiki', loadChildren: 'app/pages/wiki/wiki.module#WikiModule' }
    ]
  }
];

export const pagesRoutingProviders: any[] = [];

export const pagesRouting: ModuleWithProviders = RouterModule.forChild(pagesRoutes);

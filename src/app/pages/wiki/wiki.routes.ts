import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WikiComponent } from './wiki.component';

const wikiRoutes: Routes = [
  { path: '',
    component: WikiComponent
  }
];

export const wikiRoutingProviders: any[] = [];

export const wikiRouting: ModuleWithProviders = RouterModule.forChild(wikiRoutes);

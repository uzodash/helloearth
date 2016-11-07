import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { MapRoutes } from './map/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...MapRoutes,
  ...AboutRoutes
];

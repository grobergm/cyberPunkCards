import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { FirstLevelComponent } from './first-level/first-level.component';

const appRoutes: Routes = [
  {
    path:'',
    component: IntroComponent
  },
  {
    path:'first-level',
    component: FirstLevelComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutLandingComponent } from './layout/layout-landing/layout-landing.component';
import { LayoutAboutMeComponent } from './layout/layout-about-me/layout-about-me.component';
import { LayoutContactComponent } from './layout/layout-contact/layout-contact.component';
import { FeetComponent } from './content/feet/feet.component';

const appRoutes:Routes = [
  { 
    path:'', 
    component:LayoutLandingComponent, 
    pathMatch:'full' 
  },
  { 
    path:'about_me', 
    component:LayoutAboutMeComponent, 
    pathMatch:'full'
  },
  { 
    path:'contact', 
    component:LayoutContactComponent, 
    pathMatch:'full'
  },
  { 
    path:'feet', 
    component:FeetComponent, 
    pathMatch:'full'
  },
  // {path:'not-found', component:ErrorPageComponent, data:{message:'Error Message: Page not Found'}},
  // {path:'**', redirectTo:'/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy:PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

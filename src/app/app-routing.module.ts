import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';
import { AboutMeComponent } from './content/about-me/about-me.component';
import { ContactLayoutComponent } from './layout/contact-layout/contact-layout.component';
import { FeetComponent } from './content/feet/feet.component';

const appRoutes:Routes = [
  { 
    path:'', 
    component:LandingLayoutComponent, 
    pathMatch:'full' 
  },
  { 
    path:'about_me', 
    component:AboutMeComponent, 
    pathMatch:'full'
  },
  { 
    path:'contact', 
    component:ContactLayoutComponent, 
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

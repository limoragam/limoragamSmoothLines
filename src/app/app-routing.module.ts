import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';
import { AboutMeComponent } from './content/about-me/about-me.component';
import { ContactComponent } from './content/contact/contact.component';
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
    component:ContactComponent, 
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

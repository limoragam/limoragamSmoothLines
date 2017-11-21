import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LandingComponent } from './main/landing/landing.component';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { ContactComponent } from './main/contact/contact.component';
import { FeetComponent } from './main/feet/feet.component';
import { AboutSiteComponent } from './main/about-site/about-site.component';

const appRoutes:Routes = [
  { path:'', component:LandingComponent, pathMatch:'full' },
  { path:'about_me', component:AboutMeComponent, pathMatch:'full'},
  { path:'contact', component:ContactComponent, pathMatch:'full'},
  { path:'feet', component:FeetComponent, pathMatch:'full'},
  { path:'about_site', component:AboutSiteComponent, pathMatch:'full'},
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

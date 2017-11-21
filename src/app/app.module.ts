import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BoobyLandingComponent } from './booby/booby-landing/booby-landing.component';
import { LandingComponent } from './main/landing/landing.component';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { ContactComponent } from './main/contact/contact.component';
import { FeetComponent } from './main/feet/feet.component';
import { AboutSiteComponent } from './main/about-site/about-site.component';
import { EggComponent } from './booby/egg/egg.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BoobyLandingComponent,
    LandingComponent,
    AboutMeComponent,
    ContactComponent,
    FeetComponent,
    AboutSiteComponent,
    EggComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

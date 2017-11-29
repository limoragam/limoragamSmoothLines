import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BoobyLandingComponent } from './booby/booby-landing/booby-landing.component';
import { LandingComponent } from './main/landing/landing.component';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { ContactComponent } from './main/contact/contact.component';
import { FeetComponent } from './main/feet/feet.component';
import { AboutSiteComponent } from './main/about-site/about-site.component';
import { EggComponent } from './booby/egg/egg.component';
import { MenuComponent } from './menu/menu.component';
import { SquawkComponent } from './booby/squawk/squawk.component';

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
    SquawkComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

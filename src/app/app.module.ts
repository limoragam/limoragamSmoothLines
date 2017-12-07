import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MenuComponent } from './common/menu/menu.component';
import { AboutSiteComponent } from './common/about-site/about-site.component';

import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';
import { ContactLayoutComponent } from './layout/contact-layout/contact-layout.component';

import { LandingContentComponent } from './content/landing-content/landing-content.component';
import { AboutMeComponent } from './content/about-me/about-me.component';
import { ContactContentComponent } from './content/contact-content/contact-content.component';
import { FeetComponent } from './content/feet/feet.component';

import { BoobyLandingComponent } from './booby/booby-landing/booby-landing.component';
import { EggComponent } from './booby/egg/egg.component';
import { SquawkComponent } from './booby/squawk/squawk.component';

import { SafeUrlPipe } from './safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutSiteComponent,

    LandingLayoutComponent,

    LandingContentComponent,
    AboutMeComponent,
    ContactContentComponent,
    FeetComponent,

    BoobyLandingComponent,
    EggComponent,
    SquawkComponent,

    SafeUrlPipe,

    ContactLayoutComponent,
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

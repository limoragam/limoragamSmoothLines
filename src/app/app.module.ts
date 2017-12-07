import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MenuComponent } from './common/menu/menu.component';
import { AboutSiteComponent } from './common/about-site/about-site.component';

import { LayoutLandingComponent } from './layout/layout-landing/layout-landing.component';
import { LayoutContactComponent } from './layout/layout-contact/layout-contact.component';

import { ContentLandingComponent } from './content/content-landing/content-landing.component';
import { AboutMeComponent } from './content/about-me/about-me.component';
import { ContentContactComponent } from './content/content-contact/content-contact.component';
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

    LayoutLandingComponent,

    ContentLandingComponent,
    AboutMeComponent,
    ContentContactComponent,
    FeetComponent,

    BoobyLandingComponent,
    EggComponent,
    SquawkComponent,

    SafeUrlPipe,

    LayoutContactComponent,
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

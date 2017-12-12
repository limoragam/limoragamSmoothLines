import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutSiteComponent } from './common/about-site/about-site.component';
import { MenuComponent } from './common/menu/menu.component';
import { LayoutLandingComponent } from './layout/layout-landing/layout-landing.component';
import { LayoutAboutMeComponent } from './layout/layout-about-me/layout-about-me.component';
import { LayoutContactComponent } from './layout/layout-contact/layout-contact.component';
import { LayoutFeetComponent } from './layout/layout-feet/layout-feet.component';
import { ContentLandingComponent } from './content/content-landing/content-landing.component';
import { ContentContactComponent } from './content/content-contact/content-contact.component';
import { ContentAboutMeComponent } from './content/content-about-me/content-about-me.component';
import { BoobyLandingComponent } from './booby/booby-landing/booby-landing.component';
import { SquawkComponent } from './booby/squawk/squawk.component';
import { EggComponent } from './booby/egg/egg.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutSiteComponent,
    MenuComponent,
    LayoutLandingComponent,
    LayoutAboutMeComponent,
    LayoutContactComponent,
    LayoutFeetComponent,
    BoobyLandingComponent,
    SquawkComponent,
    EggComponent,
    ContentLandingComponent,
    ContentContactComponent,
    ContentAboutMeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

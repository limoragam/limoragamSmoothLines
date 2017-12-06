import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about-site',
  templateUrl: './about-site.component.html',
  styleUrls: ['./about-site.component.scss']
})
export class AboutSiteComponent {
  @Output() aboutSiteVisibilityEvent = new EventEmitter<boolean>();
  aboutSiteVisibility = false;

  onAboutSiteChangeVisibility(visibility:boolean) {
    this.aboutSiteVisibility = visibility;
    this.aboutSiteVisibilityEvent.emit(visibility);
    return false;
  }
}

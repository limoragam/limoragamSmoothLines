import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about-site',
  templateUrl: './about-site.component.html',
  styleUrls: ['./about-site.component.scss']
})
export class AboutSiteComponent {
  @Output() aboutSiteHideEvent = new EventEmitter();
  
  onAboutSiteHide() {
    this.aboutSiteHideEvent.emit();
    return false;
  }
}

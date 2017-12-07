import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

declare var $:any;

@Component({
  selector: 'app-content-about-me',
  templateUrl: './content-about-me.component.html',
  styleUrls: ['./content-about-me.component.scss'],
  animations: [
    trigger('scroll',[
      state('scrollup', style({
        transform:'translateY(-50%)',
      })),
      state('scrolldown', style({
        transform:'translateY(50%)',
      })),
      transition('* => scrollup', animate("600ms 50ms ease")),
      transition('* => scrolldown', animate("600ms 50ms ease")),
    ])
  ]
})
export class ContentAboutMeComponent  {
  dim = false;
  scrollState = 'scrollstop';
}

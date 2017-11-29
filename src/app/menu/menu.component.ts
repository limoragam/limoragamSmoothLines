import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { AnimationService } from '../booby/animation.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('itemFlyout',[
      state('hidden', style({
        opacity:0,
        'font-size':0,
        transform:'translateY(700%)',
      })),
      state('displayed', style({
        opacity:1,
        'font-size':'0.9em',
        transform:'translateY(0)'
      })),
      transition('hidden => displayed', animate("600ms 50ms ease", keyframes([
        style({offset:0, opacity:0, 'font-size':0, transform:'translateY(700%)'}),
        style({offset:0.5, opacity:0.5, 'font-size':'0.3em', transform:'translateY(550%)'}),
        style({offset:1, opacity:1, 'font-size':'0.9em', transform:'translateY(0)'}),
      ]))),
    ])
  ]
})
export class MenuComponent {
  menuItemState = 'hidden';
  menuItems = [
    {'menuItemState':'hidden', 'routerLink':'/', 'text':'Nest'},
    {'menuItemState':'hidden', 'routerLink':'/about_me', 'text':'About Me'},
    {'menuItemState':'hidden', 'routerLink':'/contact', 'text':'Contact Me'},
    {'menuItemState':'hidden', 'routerLink':'/feet', 'text':'See My Feet'},
    {'menuItemState':'hidden', 'routerLink':'/about_site', 'text':'About Site'},
  ];

  constructor(private animationService:AnimationService) {}

  displayMenuItems() {
    this.menuItems.forEach((menuItem, i) => {
      let delay = (i+1) * 100;
      setTimeout(() => {
        menuItem.menuItemState = 'displayed';
      }, delay)
    });
  }
}

import { Component } from '@angular/core';

import { AnimationService } from './booby/animation.service';
import { AttributesService } from './booby/attributes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    AnimationService,
    AttributesService
  ]
})
export class AppComponent {
}

import { Component } from '@angular/core';

import { AnimationService } from './booby/animation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AnimationService]
})
export class AppComponent {
}

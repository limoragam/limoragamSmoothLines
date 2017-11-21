declare var Snap: any;
declare var mina:any;

import { Component, OnInit, OnDestroy } from '@angular/core';

import { AnimationService } from './../animation.service';
import { BoobyLandingService } from './booby-landing.service';

@Component({
  selector: 'app-booby-landing',
  templateUrl: './booby-landing.component.html',
  styleUrls: ['./booby-landing.component.css'],
  providers: [ BoobyLandingService ]
})
export class BoobyLandingComponent implements OnInit, OnDestroy {
  timeoutHandle:any;

  constructor(private animationService:AnimationService, private boobyLandingService:BoobyLandingService) { }

  ngOnInit() {
    // use snap after init
    this.animateBoobyLanding();
  }

  animateBoobyLanding() {
    let snap:any = Snap("#boobyLanding");
    //    var pathBody = snap.path(this.boobyLandingService.pathsBody[0]);
    var pathBody = snap.select("#body");
    pathBody.attr({path:this.boobyLandingService.pathsBody[0]});
    pathBody.attr(this.boobyLandingService.attrBody);

    var pathRightWing = snap.select("#rightWing");
    pathRightWing.attr({path:this.boobyLandingService.pathsRightWing[0]});
    pathRightWing.attr(this.boobyLandingService.attrWing);

    var pathLeftWing = snap.select("#leftWing");
    pathLeftWing.attr({path:this.boobyLandingService.pathsLeftWing[0]});
    pathLeftWing.attr(this.boobyLandingService.attrWing);

    var pathRightEye = snap.select("#rightEye");
    pathRightEye.attr({path:this.boobyLandingService.pathsRightEye[0]});
    pathRightEye.attr(this.boobyLandingService.attrEye);

    var pathRightPupil = snap.select("#rightPupil");
    pathRightPupil.attr({path:this.boobyLandingService.pathsRightPupil[0]});
    pathRightPupil.attr(this.boobyLandingService.attrEye);

    var pathLeftEye = snap.select("#leftEye");
    pathLeftEye.attr({path:this.boobyLandingService.pathsLeftEye[0]});
    pathLeftEye.attr(this.boobyLandingService.attrEye);

    var pathLeftPupil = snap.select("#leftPupil");
    pathLeftPupil.attr({path:this.boobyLandingService.pathsLeftPupil[0]});
    pathLeftPupil.attr(this.boobyLandingService.attrEye);
    
    var pathBeak = snap.select("#beak");
    pathBeak.attr({path:this.boobyLandingService.pathsBeak[0]});
    pathBeak.attr(this.boobyLandingService.attrBeak);
    
    var pathEyebrow = snap.select("#eyebrow");
    pathEyebrow.attr({path:this.boobyLandingService.pathsEyebrow[0]});
    pathEyebrow.attr(this.boobyLandingService.attrEyebrow);
    
    this.animationService.animateFrameByTimeout(this.boobyLandingService.framesBody, 0, 2);
    this.animationService.animateFrameByTimeout(this.boobyLandingService.framesRightWing, 0, 2);
    this.animationService.animateFrameByTimeout(this.boobyLandingService.framesLeftWing, 0, 2);
    this.animationService.animateFrameByTimeout(this.boobyLandingService.framesRightEye, 0, 2);
    this.animationService.animateFrameByTimeout(this.boobyLandingService.framesRightPupil, 0, 2);
    this.animationService.animateFrameByTimeout(this.boobyLandingService.framesLeftEye, 0, 2);
    this.animationService.animateFrameByTimeout(this.boobyLandingService.framesLeftPupil, 0, 2);
    this.animationService.animateFrameByTimeout(this.boobyLandingService.framesBeak, 0, 2);
    this.animationService.animateFrameByTimeout(this.boobyLandingService.framesEyebrow, 0, 2);
    this.blink(4000);
  }

  blink(delay:number) {
    this.timeoutHandle = setTimeout(()=>{
      this.animationService.animateFrameByTimeout(this.boobyLandingService.framesRightEye, 3, 4);
      this.animationService.animateFrameByTimeout(this.boobyLandingService.framesRightPupil, 3, 4);
      this.animationService.animateFrameByTimeout(this.boobyLandingService.framesLeftEye, 3, 4);
      this.animationService.animateFrameByTimeout(this.boobyLandingService.framesLeftPupil, 3, 4);

      let newDelay = Math.floor((Math.random()/2 + 0.5) * 10000);
      this.blink(newDelay);
    },delay);
  }

  ngOnDestroy() {
    if(this.timeoutHandle) {
      clearTimeout(this.timeoutHandle);
    }
  }
}

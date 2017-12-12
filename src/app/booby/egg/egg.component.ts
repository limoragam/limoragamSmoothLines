declare var Snap: any;
declare var mina:any;

import { Component, OnInit } from '@angular/core';

import { AnimationService } from './../animation.service';
import { EggService } from './egg.service';

@Component({
  selector: 'app-egg',
  templateUrl: './egg.component.html',
  styleUrls: ['./egg.component.scss'],
  providers: [EggService]
})
export class EggComponent implements OnInit {
  
  constructor(private animationService:AnimationService, public eggService:EggService) { }

  ngOnInit() {
    this.initEgg();
  }

  initEgg() {
    let snap:any = Snap("#egg");
    var pathWholeEgg = snap.select("#pathEgg");
    pathWholeEgg.attr(this.eggService.attrEgg);
    var pathRightHalf = snap.select("#pathEggRight");
    pathRightHalf.attr(this.eggService.attrEgg);
    var pathLeftHalf = snap.select("#pathEggLeft");
    pathLeftHalf.attr(this.eggService.attrEgg);
  }

  crackEgg() {
    let snap:any = Snap("#egg");
    var whole = snap.select("#whole");
    this.animationService.animateFrame(whole, this.eggService.wholeEggMouseEnterFrames, 0, this.eggService.wholeEggMouseEnterFrames.length-1);
    var rightHalf = snap.select("#rightHalf");
    this.animationService.animateFrame(rightHalf, this.eggService.rightHalfMouseEnterFrames, 0, this.eggService.rightHalfMouseEnterFrames.length-1);
    var leftHalf = snap.select("#leftHalf");
    this.animationService.animateFrame(leftHalf, this.eggService.leftHalfMouseEnterFrames, 0, this.eggService.leftHalfMouseEnterFrames.length-1);
}

  fixEgg() {
    let snap:any = Snap("#egg");
    var rightHalf = snap.select("#rightHalf");
    this.animationService.animateFrame(rightHalf, this.eggService.rightHalfMouseLeaveFrames, 0, this.eggService.rightHalfMouseLeaveFrames.length-1);
    var leftHalf = snap.select("#leftHalf");
    this.animationService.animateFrame(leftHalf, this.eggService.leftHalfMouseLeaveFrames, 0, this.eggService.leftHalfMouseLeaveFrames.length-1);
    var whole = snap.select("#whole");
    this.animationService.animateFrame(whole, this.eggService.wholeEggMouseLeaveFrames, 0, this.eggService.wholeEggMouseLeaveFrames.length-1);
  }
}

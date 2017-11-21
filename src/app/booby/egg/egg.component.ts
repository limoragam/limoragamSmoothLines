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
  // wholeEgg = true;

  constructor(private animationService:AnimationService, private eggService:EggService) { }

  ngOnInit() {
  }

  crackEgg() {
    let snap:any = Snap("#egg");
    var wholeEgg = snap.select("#wholeEgg");
    this.animationService.animateFrame(wholeEgg, this.eggService.wholeEggMouseEnterFrames, 0, this.eggService.wholeEggMouseEnterFrames.length-1);
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
    var wholeEgg = snap.select("#wholeEgg");
    this.animationService.animateFrame(wholeEgg, this.eggService.wholeEggMouseLeaveFrames, 0, this.eggService.wholeEggMouseLeaveFrames.length-1);
  }
}

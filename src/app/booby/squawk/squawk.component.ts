declare var Snap: any;
declare var mina:any;

import { Component, OnInit } from '@angular/core';

import { SquawkService } from './squawk.service';

@Component({
  selector: 'app-squawk',
  templateUrl: './squawk.component.html',
  styleUrls: ['./squawk.component.scss'],
  providers: [SquawkService]
})
export class SquawkComponent implements OnInit {

  constructor(public squawkService:SquawkService) { }

  ngOnInit() {
    this.initBooby();
  }

  initBooby() {
    let snap:any = Snap("#squawk");
    var pathBody = snap.select("#pathBody");
    pathBody.attr(this.squawkService.attrBody);
    var pathRightEye = snap.select("#pathRightEye");
    pathRightEye.attr(this.squawkService.attrEye);
    var pathRightPupil = snap.select("#pathRightPupil");
    pathRightPupil.attr(this.squawkService.attrEye);
    var pathLeftEye = snap.select("#pathLeftEye");
    pathLeftEye.attr(this.squawkService.attrEye);
    var pathLeftPupil = snap.select("#pathLeftPupil");
    pathLeftPupil.attr(this.squawkService.attrEye);
    var pathEyebrow = snap.select("#pathEyebrow");
    pathEyebrow.attr(this.squawkService.attrEyebrow);
    var pathBeak = snap.select("#pathBeak");
    pathBeak.attr(this.squawkService.attrBeak);
    var groupRightWing = snap.select("#rightWing");
    groupRightWing.attr(this.squawkService.attrWing);
    var groupLeftWing = snap.select("#leftWing");
    groupLeftWing.attr(this.squawkService.attrWing);
    var groupRightFoot = snap.select("#rightFoot");
    groupRightFoot.attr(this.squawkService.attrFoot);
    var groupLeftFoot = snap.select("#leftFoot");
    groupLeftFoot.attr(this.squawkService.attrFoot);
  }
}

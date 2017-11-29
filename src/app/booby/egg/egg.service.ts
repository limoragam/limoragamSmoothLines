import { Injectable } from '@angular/core';

import { AnimationFrame } from '../animation-frame.model';
import { AttributesService } from '../attributes.service';

@Injectable()
export class EggService {
  attrEgg = this.attributesService.attrEgg;
  
  pathEgg = "M7.962 7.693C3.416 8.063 1.81 6.05 1.746 4.05 1.68 2.05 3.36.394 6.83.338c3.47-.055 7.433 1.51 7.5 3.578.066 2.067-3.791 3.567-6.368 3.777z";
  pathEggRight = "M5.948 6.758l1.91-1.46-1.111-.59L8.17 3.145 5.948 1.199l.936-.856c3.416-.06 7.38 1.506 7.446 3.573.066 2.067-3.791 3.567-6.347 3.777z"; 
  pathEggLeft = "M5.948 6.758l1.91-1.46-1.111-.59L8.17 3.145 5.948 1.199l.91-.858C3.36.394 1.68 2.05 1.745 4.05c.064 2 1.67 4.011 6.226 3.642z";

  pathsLines = [
    "M4.275 1.911h5.95v.658h-5.95z",
    "M4.275 3.744h5.95v.659h-5.95z",
    "M4.275 5.538h5.95v.659h-5.95z",
  ];

  pathsLinesRight = [
    "M6.768 1.911h3.457v.658H7.508z",
    "M7.604 3.745h2.621v.658H6.96z",
    "M7.508 5.539h2.717v.658H6.63z",
  ];

  pathsLinesLeft = [
    "M7.508 2.57H4.275V1.91h2.493z",
    "M6.96 4.403H4.275v-.658h3.33z",
    "M6.63 6.197H4.275v-.658h3.233z",
  ];

  private svgId = "#egg";
  private groupWholeEggId = "#wholeEgg";
  private groupRightHalfId = "#rightHalf";
  private groupLeftHalfId = "#leftHalf";

  wholeEggMouseEnterFrames:AnimationFrame[] = [
    new AnimationFrame(this.svgId, this.groupWholeEggId, {opacity:0}, 200, null),
  ];

  wholeEggMouseLeaveFrames:AnimationFrame[] = [
    new AnimationFrame(this.svgId, this.groupWholeEggId, {opacity:1}, 600, null),
  ];

  rightHalfMouseEnterFrames:AnimationFrame[] = [
    new AnimationFrame(this.svgId, this.groupRightHalfId, {opacity:1}, 300, null),
    new AnimationFrame(this.svgId, this.groupRightHalfId, {'transform':'t2,-0.5,r16,7,2'}, 300, null),
  ];

  rightHalfMouseLeaveFrames:AnimationFrame[] = [
    new AnimationFrame(this.svgId, this.groupRightHalfId, {'transform':'t0,0,r0,0,0'}, 300, null),
    new AnimationFrame(this.svgId, this.groupRightHalfId, {opacity:0}, 300, null),
  ];

  leftHalfMouseEnterFrames:AnimationFrame[] = [
    new AnimationFrame(this.svgId, this.groupLeftHalfId, {opacity:1}, 300, null),
    new AnimationFrame(this.svgId, this.groupLeftHalfId, {'transform':'t-1,0,r-16,5,5'}, 300, null),
  ];

  leftHalfMouseLeaveFrames:AnimationFrame[] = [
    new AnimationFrame(this.svgId, this.groupLeftHalfId, {'transform':'t0,0,r0,0,0'}, 300, null),
    new AnimationFrame(this.svgId, this.groupLeftHalfId, {opacity:0}, 300, null),
  ];

  constructor(private attributesService:AttributesService) {}
}

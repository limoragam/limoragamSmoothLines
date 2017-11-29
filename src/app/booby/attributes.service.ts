import { Injectable } from '@angular/core';

@Injectable()
export class AttributesService {
  // General
  attrLine = {stroke:'black', 'stroke-width':'0.02rem'};
  brown = "#784623";
  blue = "#00c8e1";
  
  // Booby
  attrBody = {fill:'white', 'fill-rule':'evenodd'};
  attrWing = {fill:this.brown, 'fill-rule':'evenodd'};
  attrEye = {fill:'none'};
  attrBeak = {fill:this.blue, 'fill-rule':'evenodd'};
  attrEyebrow = {fill:'none', stroke:'black', 'stroke-width':'0.06rem', 'stroke-linecap':'round'};
  attrFoot = {fill:this.blue, 'fill-rule':'evenodd'};
  
  // Egg
  attrEgg = {fill:'white', 'fill-rule':'evenodd'};

  constructor() {
    this.extend(this.attrBody, this.attrLine);
    this.extend(this.attrWing, this.attrLine);
    this.extend(this.attrEye, this.attrLine);
    this.extend(this.attrBeak, this.attrLine);
    this.extend(this.attrFoot, this.attrLine);
    this.extend(this.attrEgg, this.attrLine);
  }

  extend(obj, src) {
    Object.keys(src).forEach((key)=> { obj[key] = src[key]; });
    return obj;
  }
}

declare var Snap: any;
declare var mina: any;

import { Injectable, ElementRef } from '@angular/core';

import { AnimationFrame } from './animation-frame.model';

@Injectable()
export class AnimationService {
  animateFrame(svgElement:any, animationFrames:AnimationFrame[], startFrameIndex:number, lastFrameIndex:number) {
    let direction = lastFrameIndex>=startFrameIndex ? 'forward' : 'backward';
    this.animateFrameRecursive(svgElement, animationFrames, startFrameIndex, lastFrameIndex, direction);
  }

  animateFrameRecursive(svgElement: any, animationFrames: AnimationFrame[], currentFrameIndex: number, lastFrameIndex: number, direction: string) {
    if (currentFrameIndex<0 || currentFrameIndex>=animationFrames.length || 
      lastFrameIndex<0 || lastFrameIndex>=animationFrames.length) {
      return;
    }

    let nextFrame: number;
    if (direction === 'forward') {
      if (currentFrameIndex > lastFrameIndex) {
        return;
      }
      nextFrame = currentFrameIndex + 1;
    } else {
      if (currentFrameIndex < lastFrameIndex) {
        return;
      }
      nextFrame = currentFrameIndex - 1;
    }

    svgElement.animate(
      animationFrames[currentFrameIndex].animation,
      animationFrames[currentFrameIndex].duration,
      animationFrames[currentFrameIndex].easing,
      this.animateFrameRecursive(svgElement, animationFrames, nextFrame, lastFrameIndex, direction)
    );
  }

  // For times when Snap SVG doesn't do a good job on just plain animation (it is looking for shortcuts)
  animateFrameByTimeout(animationFrames: AnimationFrame[], firstFrameIndex: number, lastFrameIndex: number) {
    if (firstFrameIndex<0 || firstFrameIndex>=animationFrames.length || 
        lastFrameIndex<0 || lastFrameIndex>=animationFrames.length) {
      return;
    }

    let snap: any = Snap(animationFrames[firstFrameIndex].svgId);
    var element = snap.select(animationFrames[firstFrameIndex].elementId);
    let timeout = 0;

    let direction = (lastFrameIndex>=firstFrameIndex) ? 'forward' : 'backward';
    if(direction !== 'forward') {
      firstFrameIndex = -firstFrameIndex;
      lastFrameIndex = -lastFrameIndex;
    }

    for (let frameCounter = firstFrameIndex; frameCounter <= lastFrameIndex; ++frameCounter) {
      let currentFrameIndex = Math.abs(frameCounter);
      setTimeout(() => {
        element.animate(
          animationFrames[currentFrameIndex].animation,
          animationFrames[currentFrameIndex].duration,
          animationFrames[currentFrameIndex].easing
        )
      },
        timeout
      );
      timeout = animationFrames[currentFrameIndex].duration;
    }
  }
}

import { Component, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { forEach } from '@angular/router/src/utils/collection';

declare var $:any;

@Component({
  selector: 'app-content-about-me',
  templateUrl: './content-about-me.component.html',
  styleUrls: ['./content-about-me.component.scss'],
})
export class ContentAboutMeComponent implements AfterViewInit  {
  dim = false;

  entriesOffsets = [];
  quarterOfEntriesWindow = 0;

  hoverScrollDistancePerSec = 600;

  resizeTimeout:any;

  ngAfterViewInit() {
    this.collectEntriesOffsets();
    let entryWindowHeight = $(".aboutme-container");
    this.quarterOfEntriesWindow = entryWindowHeight.prop("clientHeight") / 5;
  }

  collectEntriesOffsets() {
    let entries = $("[id*='entry-']");
    for(let entry of entries) {
      let entryName = $(entry).attr("id");
      let entryOffset = $(entry).prop("offsetTop");
      this.entriesOffsets[entryName] = entryOffset;
    }
  }

  scrollEntriesTo(targetId:string, event:Event) {
    event.preventDefault();
    if(targetId in this.entriesOffsets) {
      let targetOffset = this.entriesOffsets[targetId] > this.quarterOfEntriesWindow ? 
                         this.entriesOffsets[targetId] - this.quarterOfEntriesWindow : 0;
      $("#entries").animate({scrollTop:targetOffset},'slow');
    }
    else {
      console.log("entry not recognized");
    }
  }

  scroll(direction:string) {
    let entriesWindow = $("#entries");

    // Stop animation on mouse leave
    if(direction!=='up' && direction!=='down') {
      entriesWindow.stop();
      return;
    }

    // Start animation on mouse enter
    let currentDistanceFromTop = entriesWindow.scrollTop(); // Where is entries currently scrolled to?
    // Direction up
    if(direction==='up') {
      let targetPosition = 0;  
      let duration = (currentDistanceFromTop / this.hoverScrollDistancePerSec) * 1000; // (travelling distance / speed) * ms factor
      entriesWindow.animate({
        scrollTop:targetPosition
      }, duration, 'linear');
    // Direction down
    } else {
      let targetPosition = entriesWindow.prop("scrollHeight") - entriesWindow.prop("clientHeight"); // Bottom of text minus window height
      let duration = ((targetPosition - currentDistanceFromTop) / this.hoverScrollDistancePerSec) * 1000; // Travelling distance is target distance minus what's been travelled so far
      entriesWindow.animate({
        scrollTop:targetPosition
      }, duration, 'linear');
    }
  }

  onMouseWheelScroll() {
    console.log("detected");
  }

  onResize(event:Event) {
    // Entries offsets change when window size changes
    // Set a timeout for event to finish before calculating. 
    // If event was fired before timeout was finished, clear timeout and set another
    if(this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout(()=>{
      this.collectEntriesOffsets();
    }, 500);
  }
}

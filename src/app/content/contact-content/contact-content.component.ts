import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-content',
  templateUrl: './contact-content.component.html',
  styleUrls: ['./contact-content.component.scss']
})
export class ContactContentComponent {
  @ViewChild('f') formObject:NgForm;
  dim = false;
  
  constructor() { }

  onSubmit() {
    //Send mail here
  }
}

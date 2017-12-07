import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-content-contact',
  templateUrl: './content-contact.component.html',
  styleUrls: ['./content-contact.component.scss']
})
export class ContentContactComponent {
  @ViewChild('f') formObject:NgForm;
  dim = false;
  
  constructor() { }

  onSubmit() {
    //Send mail here
  }
}

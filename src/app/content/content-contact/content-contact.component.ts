import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-content-contact',
  templateUrl: './content-contact.component.html',
  styleUrls: ['./content-contact.component.scss']
})
export class ContentContactComponent {
  @ViewChild('f') formObject:NgForm;

  onSubmit(myForm:NgForm) {
    //Send mail here
  }
}

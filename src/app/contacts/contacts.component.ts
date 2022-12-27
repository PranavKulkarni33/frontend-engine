import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  FormData: FormGroup | null=null; 
  
  name: string = "";
  email: string ="";
  message: string = "";


  constructor(private builder: FormBuilder, private contact: EmailService) {

  }

  ngOnInit() {
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
      })
  }

  onSubmit(FormData) {
    this.contact.SendEmail(FormData)
    .subscribe(response => {
      location.href = location.origin + '/home';
    }, error => {
    console.warn(error.responseText)
    console.log({ error })
  })
    // send the name, email, and message to the server or email address
  }
  

}

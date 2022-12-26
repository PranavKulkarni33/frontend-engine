import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  name: string = "";
  email: string ="";
  message: string = "";

  onSubmit(): void {
    // send the name, email, and message to the server or email address
  }
  

}

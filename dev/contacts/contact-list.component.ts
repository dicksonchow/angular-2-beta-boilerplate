import {Component} from 'angular2/core';
import {ContactComponent} from "./contact.component";

@Component({
  selector: 'contact-list',
  template: `
    <ul>
      <li *ngFor="#contact of contacts"
          (click)="onSelect(contact)"
          [class.clicked]="selectedContact === contact">
        {{contact.firstName}} {{contact.lastName}}
      </li>
    </ul>
    <contact [contact]='selectedContact'></contact>
  `,
  directives: [ContactComponent]
})

export class ContactListComponent {
  public contacts = [
    {
      firstName: "Dickson",
      lastName: "Chow",
      phone: "12345678",
      email: "1234@gmail.com"
    },
    {
      firstName: "Dick",
      lastName: "Chan",
      phone: "87654321",
      email: "1234@gmail.com"
    },
    {
      firstName: "Tai Man",
      lastName: "Chan",
      phone: "14725836",
      email: "1234@gmail.com"
    },
    {
      firstName: "Tom",
      lastName: "Ho",
      phone: "15935746",
      email: "1234@gmail.com"
    },
  ];

  public selectedContact = {};

  onSelect(contact) {
    this.selectedContact = contact;
  };
}

import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
      <ul>
        <li *ngFor="#contact of contacts"
            (click)="onSelect(contact)"
            [class.clicked]="showDetail === true">
          {{contact.firstName}} {{contact.lastName}}
        </li>
      </ul>
      <input [(ngModel)] = "selectedContact.firstName" type="text"/>
      <div *ngIf="showDetail === true">
        Phone Number: {{selectedContact.phone}} <br>
        E-Mail: {{selectedContact.email}}
      </div>
    `,
    styleUrls: ["../src/css/app.css"]
})
export class AppComponent {

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

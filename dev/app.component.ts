import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h1 
          (click)="onSelect()"
          [class.clicked]="showDetail === true"
        >{{contact.firstName}} {{contact.lastName}}</h1>
        <input [(ngModel)] = "contact.firstName" type="text"/>
        <div *ngIf="showDetail === true">
          Phone Number: {{contact.phone}} <br>
          E-Mail: {{contact.email}}
        </div>
    `,
    styleUrls: ["../src/css/app.css"]
})
export class AppComponent {

    public contact = {
      firstName: "Dickson",
      lastName: "Chow",
      phone: "12345678",
      email: "1234@gmail.com"
    };

    public showDetail = false;

    onSelect() {
      this.showDetail = true;
    };
}

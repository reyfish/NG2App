import { Component } from '@angular/core';
import { MyMessage } from './message.component';

@Component({
    selector: 'my-app',
    directives: [MyMessage],
    template: `<h1>My First Angular 2 App</h1>
    <my-message messageText="Another Message!"></my-message>
`
})
export class AppComponent { }
import { Component } from '@angular/core';
import { MessageComponent } from './message.component';
import { MessageLevel } from './message-level.enum';

@Component({
    selector: 'my-app',
    directives: [MessageComponent],
    template: `<h1>My First Angular 2 App</h1>
    <my-message messageText={{messageText}} level={{level}}></my-message>
    <button (click)="onClick()">Toggle Level</button>
`
})
export class AppComponent {
    private messageText: string = "this is the error message";
    private level: MessageLevel = MessageLevel.Info;
    private indx: number = 0;
    onClick() {

        this.level = MessageLevel.Error;

    };
}
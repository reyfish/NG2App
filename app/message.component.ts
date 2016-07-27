import { Component, Input } from '@angular/core';
import { MessageLevel } from './message-level.enum';

@Component({
    selector: 'my-message',
    templateUrl: './app/message.component.html',
    styleUrls: ['./app/message.component.css']
})
export class MyMessage {
    @Input() messageText: string = "My Message";
    @Input() level: MessageLevel = MessageLevel.Error;

    constructor() {
        let myDiv = document.getElementsByClassName('message');
        //myDiv.style.color = 'orange';   // updating the div via its properties
    }
}
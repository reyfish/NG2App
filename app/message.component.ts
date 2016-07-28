import { Component, Input } from '@angular/core';
import { MessageLevel } from './message-level.enum';

@Component({
    selector: 'my-message',
    templateUrl: './app/message.component.html',
    styleUrls: ['./app/message.component.css']
})
export class MessageComponent {
    @Input() messageText: string;
    @Input() set level(value: MessageLevel) {
        this.levelString = MessageLevel[value];
        this.isWarning = value == MessageLevel.Warning;
        this.isError = value == MessageLevel.Error;
        this.isInfo = value == MessageLevel.Info;
        this.isSuccess = value == MessageLevel.Success;
        this.statusClasses = ["status", MessageLevel[value]];
        
    }

    private levelString: string;
    private isError: boolean;
    private isWarning: boolean;
    private isInfo: boolean;
    private isSuccess: boolean;
    private statusClasses: string[];

    constructor() {
        let myDiv = document.getElementsByClassName('message');
     
        //myDiv.style.color = 'orange';   // updating the div via its properties
    }
}

import { Component } from '@angular/core';
import { MessageComponent } from './message.component';
import { MessageLevel } from './message-level.enum';

import { BookmarkService } from './Bookmark.service';
import { Bookmark } from './bookmark';

import * as _ from 'lodash';


class EnumItem {
    constructor(public value: string, public name: string) {
    }
}

class EnumClass {


    public allItems: EnumItem[] = [];
    constructor(private enumObject: Object) {
        for (let item in enumObject) {
            this.allItems.push(new EnumItem(item, _.startCase(_.toLower(item))));
        }
    }

    public toEnum(item: string) {
        return this.enumObject[item];
    }

    public toString(obj: Object): string {
        return obj.valueOf().toString();
    }
};

enum OrderTypes {
    STOP = <any>"STOP",
    LIMIT = <any>"LIMIT",
    MARKET = <any>"MARKET",
    STOP_LIMIT = <any>"STOP_LIMIT"
};

class EnumOrderTypes extends EnumClass {
    constructor() {
        super(OrderTypes);
    }
}

@Component({
    selector: 'my-app',
    directives: [MessageComponent],
    providers: [BookmarkService],
    template: `

    <!--<div *ngIf="bookmarks">-->
    <div>
    <h1>My First Angular 2 App</h1>

    <h3>
        <select (change)="onChange($event.target.value)">
            <option *ngFor="let item of enumItems" [value]=item.value [selected]="item.value == typeSelected">{{item.name}}</option>
        </select>
        <label>{{isOrderType}}</label>
        <label>{{typeSelected}}</label>
    </h3>



    <h3>My Bookamrks:</h3>
    <ul >
        <li *ngFor="let bookmark of bookmarks">
            <strong>{{ bookmark.title }}</strong> - (<a href="{{bookmark.url}}">{{bookmark.url}})</a>
        </li>
    </ul>

    <my-message messageText={{messageText}} level={{level}}></my-message>
    <button (click)="onClick()">Toggle Level</button>
    </div>
`
})

export class AppComponent {
    private messageText: string = "this is the error message";
    private level: MessageLevel = MessageLevel.Info;
    private indx: number = 0;


    private isOrderType: boolean;
    private enumItems: EnumItem[]=[];
    private orderTypeItem: OrderTypes;
    private typeSelected: string;
    


    //bookmarks: Bookmark[];
    errorString: string;

    constructor() {

        let enumOrderTypes: EnumOrderTypes = new EnumOrderTypes(); 

        //* 1. list of all enums
        this.enumItems = enumOrderTypes.allItems;

        //* 2. from sal as string to enum
        let itemStr = 'LIMIT';
        let selectedOrderTpye: OrderTypes = enumOrderTypes.toEnum(itemStr);
        this.isOrderType = OrderTypes.LIMIT === selectedOrderTpye;

        //* 3. from enum to sal as string
        this.typeSelected = enumOrderTypes.toString(enumOrderTypes.toEnum(itemStr));
    
        //* 4. setting current value in the drop down
        this.typeSelected = selectedOrderTpye.valueOf().toString();
    }

    //* 5. getting selected value from the dropdown
    onChange(value) {
        this.typeSelected = value;
    }

    getBookmarks() {

        //this._bookmarkService.getBookmarks()
        //    .then((bookmarks) => {
        //        bookmarks => this.bookmarks = bookmarks;
        //        console.log("on then");
        //    })
        //    .catch((error) => {
        //        this.errorString = <any>error
        //        console.log("on error");
        //    });

    }

    ngOnInit() {

        //this.getBookmarks();
    }

    onClick() {

        this.level = MessageLevel.Error;

    };
}
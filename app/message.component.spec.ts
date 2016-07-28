import { Component } from '@angular/core';
import { TestComponentBuilder, ComponentFixture } from '@angular/compiler/testing';
import { inject, async } from '@angular/core/testing';

import { MessageComponent } from './message.component';
import { MessageLevel } from './message-level.enum';

describe('Message Component...', () => {

    let fixture: ComponentFixture<MessageComponent>;
    let component: MessageComponent;
    let nativeElement: HTMLElement;

    beforeEach(async(inject([TestComponentBuilder], (testComponentBuilder: TestComponentBuilder) => {
        return testComponentBuilder
            .createAsync(MessageComponent)
            .then((f) => {
                fixture = f;
                component = fixture.componentInstance;
                nativeElement = fixture.nativeElement;
            });
    })));

    it('should display correct message', () => {
        component.messageText = "This is the message it should contain";
        fixture.detectChanges();
        var messageDiv: HTMLDivElement = nativeElement.querySelector("message") as HTMLDivElement;
        expect(messageDiv.innerHTML).toBe(component.messageText);
    });

});
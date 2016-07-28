System.register(['@angular/compiler/testing', '@angular/core/testing', './message.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, testing_2, message_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (message_component_1_1) {
                message_component_1 = message_component_1_1;
            }],
        execute: function() {
            describe('Message Component...', function () {
                var fixture;
                var component;
                var nativeElement;
                beforeEach(testing_2.async(testing_2.inject([testing_1.TestComponentBuilder], function (testComponentBuilder) {
                    return testComponentBuilder
                        .createAsync(message_component_1.MessageComponent)
                        .then(function (f) {
                        fixture = f;
                        component = fixture.componentInstance;
                        nativeElement = fixture.nativeElement;
                    });
                })));
                it('should display correct message', function () {
                    component.messageText = "This is the message it should contain";
                    fixture.detectChanges();
                    var messageDiv = nativeElement.querySelector("message");
                    expect(messageDiv.innerHTML).toBe(component.messageText);
                });
            });
        }
    }
});
//# sourceMappingURL=message.component.spec.js.map
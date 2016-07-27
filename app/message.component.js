System.register(['@angular/core', './message-level.enum'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, message_level_enum_1;
    var MyMessage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (message_level_enum_1_1) {
                message_level_enum_1 = message_level_enum_1_1;
            }],
        execute: function() {
            MyMessage = (function () {
                function MyMessage() {
                    this.messageText = "My Message";
                    this.level = message_level_enum_1.MessageLevel.Error;
                    var myDiv = document.getElementsByClassName('message');
                    //myDiv.style.color = 'orange';   // updating the div via its properties
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MyMessage.prototype, "messageText", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], MyMessage.prototype, "level", void 0);
                MyMessage = __decorate([
                    core_1.Component({
                        selector: 'my-message',
                        templateUrl: './app/message.component.html',
                        styleUrls: ['./app/message.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyMessage);
                return MyMessage;
            }());
            exports_1("MyMessage", MyMessage);
        }
    }
});
//# sourceMappingURL=message.component.js.map
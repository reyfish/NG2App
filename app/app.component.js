System.register(['@angular/core', './message.component', './message-level.enum'], function(exports_1, context_1) {
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
    var core_1, message_component_1, message_level_enum_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (message_component_1_1) {
                message_component_1 = message_component_1_1;
            },
            function (message_level_enum_1_1) {
                message_level_enum_1 = message_level_enum_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.messageText = "this is the error message";
                    this.level = message_level_enum_1.MessageLevel.Info;
                    this.indx = 0;
                }
                AppComponent.prototype.onClick = function () {
                    this.level = message_level_enum_1.MessageLevel.Error;
                };
                ;
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [message_component_1.MessageComponent],
                        template: "<h1>My First Angular 2 App</h1>\n    <my-message messageText={{messageText}} level={{level}}></my-message>\n    <button (click)=\"onClick()\">Toggle Level</button>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
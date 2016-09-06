/// <reference path="typings/lodash/lodash.d.ts" />
var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
var Color;
(function (Color) {
    Color[Color["GREEN"] = "My Green"] = "GREEN";
    Color[Color["RED"] = "Red"] = "RED";
    Color[Color["BLUE"] = "The Blue"] = "BLUE";
})(Color || (Color = {}));
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
    //* 1. from sal as string to enum
    //* 2. from enum to sal as string
    //* 3. list of all enums
    //* 4. setting current value in the drop down
    //* 5. getting selected value from the dropdown
    var myclr = Color.GREEN;
    console.log(typeof myclr);
    var strClr = "BLUE";
    var theClr = Color[strClr];
    console.log(theClr === Color.BLUE);
    console.log(typeof theClr + Color[strClr]);
    for (var clr in Color) {
        console.log(clr);
    }
};
//# sourceMappingURL=app.js.map
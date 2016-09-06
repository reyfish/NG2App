/// <reference path="typings/lodash/lodash.d.ts" />

class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

enum Color {
    GREEN = <any>"My Green",
    RED = <any>"Red",
    BLUE = <any>"The Blue"
}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();

    //* 1. from sal as string to enum

    //* 2. from enum to sal as string

    //* 3. list of all enums

    //* 4. setting current value in the drop down

    //* 5. getting selected value from the dropdown



    let myclr = Color.GREEN;
    console.log(typeof myclr);
    let strClr = "BLUE";
    let theClr: Color = Color[strClr];

    console.log(theClr === Color.BLUE);

    console.log(typeof theClr + Color[strClr]);

    for (let clr in Color) {

        console.log(clr);
        //if (Color[clr] === strClr)
        //    console.log(clr);

        //if (myclr.toString() === clr)
        //    console.log(_.toLower(clr));
    }

    


        
};
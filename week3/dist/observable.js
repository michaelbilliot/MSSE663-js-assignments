"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
//import { Observable } from 'rxjs/internal/Observable';
class MyObservable {
    constructor(inputQuote) {
        this.quote = 'We made too many wrong mistakes';
        this.quoteStream = rxjs_1.of(this.quote.split(' ')).pipe(operators_1.map(e => e.length));
        this.quote = inputQuote;
    }
    quoteSubscription() {
        this.quoteStream.subscribe(function (count) { console.log('Next: ' + count); }, function (error) { console.log('Error: ' + error); }, function () { console.log('Completed'); });
    }
}
exports.MyObservable = MyObservable;

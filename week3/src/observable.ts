import { of } from 'rxjs';
import { map } from 'rxjs/operators';

export class MyObservable {

    quote: string = 'We made too many wrong mistakes';
    quoteStream = of(this.quote.split(' ')).pipe(map(e => e.length));
    
    constructor(inputQuote: string) {
        this.quote = inputQuote;
    }

    quoteSubscription(): void {
        this.quoteStream.subscribe(
            function (count: number) { console.log('Next: ' + count); },
            function (error: string) { console.log('Error: ' + error); },
            function () { console.log('Completed');}
        );
    }
}

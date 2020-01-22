import express = require('express');
var app = express();

function serve(req: any, res: any): void {
    res.send('Hello World, using TypeScript');
}

app.use('/', serve);

app.listen(8000, function() {
    console.log('Running Server...');
});
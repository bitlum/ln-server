const express = require('express');
const app = express();

app.use(require('./controllers'));

app.listen(8060, function () {
    console.log('Example app listening on port 3000!');
});

module.exports = app;
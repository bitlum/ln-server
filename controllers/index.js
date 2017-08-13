let app = new (require('express').Router)();

app.use('/ln', require('./lnController'));

module.exports = app;
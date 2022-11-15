const reload = require('./');
const data = reload('./ChatView.js');

setInterval(function () {
    console.log(new Date, data);
}, 1000);
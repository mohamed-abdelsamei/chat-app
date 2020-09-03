var moment = require('moment'); // require



var a = moment('2016-06-27T21:03:55');//now
var b = moment('2016-05-06T20:03:55');



let diff = moment(a).diff(b)
let days = Math.floor(diff / (1000 * 60 * 60 * 24))
let hours = Math.floor((diff - days * (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
console.log('days : ', days);
console.log('hours : ', hours);


require('../css/style.css');
//console.log(require('./people.js'));
let people = require('./people.js');
let $ = require('jquery');

$.each(people, function(key, value){
    $('body').append('<h1>Mr.'+ people[key].name +'</h1>')
});

console.log(people[0].name);
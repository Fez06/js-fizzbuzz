'use strict';

const ul = document.querySelector('ul.list');

for (let i = 1; i <= 100; i++){
    
    if (i % 5 === 0 && i % 3 === 0) {
        console.log('fizzbuzz');
    }
    else if (i % 5 === 0) {
        console.log('buzz');
    } 
    else if (i % 3 === 0) {
        console.log('fizz');
    }
    else {
        console.log(i);
    }

};
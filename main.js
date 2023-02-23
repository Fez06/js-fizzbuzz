'use strict';

const ul = document.querySelector('ul.list');

for (let i = 1; i <= 30; i++){
    
    if (i % 3 === 0) {
        console.log('fizz');
    } 
    else if (i % 5 === 0) {
        console.log('buzz');
    } 
    else if (i % 3,5 === 0) {
        console.log('fizzbuzz');
    }
    else {
        console.log(i);
    }
};
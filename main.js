'use strict';

const ul = document.querySelector('ul.list');


for (let i = 1; i <= 100; i++){
    
    const li = document.createElement('li');

    if (i % 5 === 0 && i % 3 === 0) {
        //console.log('fizzbuzz');
        li.append('fizzbuzz');
        ul.append(li);
        li.classList.add('square', 'fizzbuzz');
    }
    else if (i % 5 === 0) {
        //console.log('buzz');
        li.append('buzz');
        ul.append(li);
        li.classList.add('square', 'buzz');
    } 
    else if (i % 3 === 0) {
        //console.log('fizz');
        li.append('fizz');
        ul.append(li);
        li.classList.add('square', 'fizz');
    }
    else {
        //console.log(i);
        li.append(i);
        ul.append(li);
        li.classList.add('square', 'normal');
    }


    
    
};
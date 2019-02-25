

// ATM pin can only contain integers in a sequence of 4 or 6


function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }

function validatePIN (pin) {
  
    var pinlen = pin.length;
    var isCorrectLength = (pinlen == 4 || pinlen == 6);
    var hasOnlyNumbers = pin.match(/^\d+$/);
      
    if(isCorrectLength && hasOnlyNumbers){
      return true;
    }
    
    return false;
  
  }

//.map

  var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

// //list of 

// //Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

function list(data) {
    var firstNames = data.slice(0, -1).map(x => x.name).join(', ');
    var lastName = data.slice(-1).map(x => x.name);
    return [firstNames, lastName].filter(Boolean).join(' & ');
  }

function list(names){
    return names.reduce(function(prev, current, index, array){
      if (index === 0){
        return current.name;
      }
      else if (index === array.length - 1){
        return prev + ' & ' + current.name;
      } 
      else {
        return prev + ', ' + current.name;
      }
    }, '');
   }


// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's 
// divisors(except for 1 and the number itself), from smallest to largest.
//  If the number is prime return the string '(integer) is prime' (null in C#) 
//  (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

   function divisors(integer) {
    const array = []
    for (let i = 2; i < integer; i++){
    Number.isInteger(integer/i) && array.push(i)
    }
    if (array.length === 0) {
    return `${integer} is prime`
    } else {
    return array }
    }

    //have to know how everything works so that you can break it apart and 
    //add actions to build process 

    //import some from './somefile';
//import {someVar, someVar2} from './somefile';

// export default "test"

// export const someVar = 'test';
// export const someVar2 = 'test';


// Both naming choices occur in the parent component class - t
// hat is, in the component class that defines the event handler and passes it.


// A React component should use props to store information that can be changed, but can only be changed by a different component.

// A React component should use state to store information that the component itself can change.

//REACT PATTERNS

// Stateless Components Inherit From Stateful Components Recap
// You just executed your first complete React programming pattern!

// Let's review. Follow each step in the code editor:

// A stateful component class defines a function that calls this.setState. (Parent.js, lines 15-19)

// The stateful component passes that function down to a stateless component. (Parent.js, line 24)

// That stateless component class defines a function that calls the passed-down function, 
// and that can take an event object as an argument. (Child.js, lines 10-13)

// The stateless component class uses this new function as an event handler. (Child.js, line 20)

// When an event is detected, the parent's state updates. (A user selects a new dropdown menu item)

// The stateful component class passes down its state, distinct from the ability to change its state, 
// to a different stateless component. (Parent.js, line 25)

// That stateless component class receives the state and displays it. (Sibling.js, lines 5-10)

// An instance of the stateful component class is rendered. One stateless child component displays the state, 
// and a different stateless child component displays a way to change the (Parent.js, lines 23-26)

// This pattern occurs in React all the time! The more that you see it, the more that its elegance will become clear.

// Being introduced to this pattern is your first step towards understanding how React apps fit together! 
// You'll get more practice using it throughout this course, as well as in the course after this one.


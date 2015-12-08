# Hour of Code 2015

## First 30 minutes
Who was the first programmer?
    [Ada Lovelace](https://en.wikipedia.org/wiki/Ada_Lovelace)
    
But coding is not just for girls. Guys can join in too :)

And the computer will do whatever you tell it to. You have all the control. Don't worry about breaking the computer. It may complain, but that's okay. You won't hurt its feelings.

### JavaScript introduction

These code blocks can be run in this [JavaScript REPL](https://repl.it/languages/javascript).

**Output**

    console.log('hello');
    
**Variables**

    x = 1;
	x = x + 1;
    x += 1;
    x++;
    
**Loops**

    for (var i = 1; i <= 10; i++) {
        console.log(i);
    }
    
**Functions**

    function hi(x) {
        console.log("Hi " + x);        
    }
	hi('Bill');
    
**Loops combined with functions**

    function count(x) {
        for (var i = 1; i <= x; i++) {
            console.log(i);
        }
    }

	count(10);

**Base 10 vs binary**

    x = 2;
    x.toString(2); // Or Number(2).toString(2)
    
	function toBinary(x) {
        return x.toString(2);
    }
    
    function countInBinaryTo(x) {
        for (var i = 1; i <= x; i++) {
            console.log(toBinary(i));
        }
    }

	countInBinaryTo(10);
    
**Floating point**
    
	.1 + .2
	=> 0.30000000000000004 // Ah, floating point

**Problem to figure out:**

Write a `times` function that takes a number and prints out that number times 1 through 12.

For example, `times(2);` would print out 2, 4, 6... (2 x 1, 2 x 2, 2 x 3, etc)

    function times(x) {
      for (var i = 1; i <= 12; i++) {
        console.log(x + ' x ' + i + ' = ' + x * i);
        // console.log(x * i); works too
      }
    }

    times(2);

### Two example projects

**Math products**

This [web page](http://jaden.github.io/hoc-2015/math/index.html) does the same thing as the function we created above.

*Note: Hit F12 to see the code. It's quite similar to the code we wrote.*

**Fun with speech**

Get your [web browser to talk](http://jaden.github.io/hoc-2015/speech/index.html). (Chrome only)

## Last 30 minutes

[Code.org](https://code.org/learn).
function sayHello2(name) {
  var text = 'Hello ' + name; // local variable
  var sayAlert = function() { 
    alert(text);
    }
  return sayAlert;
}




The above code has a closure because the anonymous function function() { alert(text); } is declared inside another function, sayHello2() in this example. In JavaScript, if you use the function keyword inside another function, you are creating a closure.


var say2 = sayHello2('Dileep');   /* kind of button lets assume*/
     say2();

In JavaScript, if you declare a function within another function, then the local variables can remain accessible after returning from the function you called. This is demonstrated above, because we call the function say2(); after we have returned from sayHello2().

Notice that the code that we call references the variable text, which was a local variable of the function sayHello2().

function() { 
  alert(text); 
  }


alert(say2.toString()); /* kind of button lets assume*/  show code


Click the button above to get JavaScript to print out the code for the anonymous function.
You can see that the code refers to the variable text.
The anonymous function can reference text which holds the value 'Dileep' because the local variables of sayHello2() are kept in a closure.


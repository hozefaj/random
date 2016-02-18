### pattern-1
```js
// greet.js
module.exports = function() {
  console.log('Hello World');
}

// app.js
var greet1 = require('./greet');
greet1();
```

### pattern-2
```js
// greet.js
module.exports.greet = function() {
  console.log('Hello World');
}

// app.js
var greet2 = require('./greet').greet;
greet2();
```

### pattern-3: Singleton Pattern 
```js
// greet.js
function Greetr() {
  this.greeting = 'Hello World!';
  this.greet = function() {
    console.log(this.greeting);
  }

// this is like a singleton pattern
module.exports = new Greetr();

// app.js
var greet3 = require('./greet');
greet3.greet();
greet3.greeting = 'Changed hello world!';

// require under the hood caches the modules
var greet3b = require('./greet');
greet3b.greet(); // Changed hello world!
```

### pattern-4: Non-Singleton pattern
```js
// greet.js
function Greetr() {
  this.greeting = 'Hello World!';
  this.greet = function() {
    console.log(this.greeting);
  }

// returning the function 
module.exports = Greetr;

// app.js
var Greet4 = require('./greet');
var gtr = new Greet4(); // creating new object everytime
grt.greet();
```

###pattern-5: Revealing module pattern
```js
// greet.js
var greeting = 'Hello World!!!!'

// exported(public) function
function greet() {
  console.log(greeting);
}

// private function
function _changeGreeting() {
  greeting = 'Hola';
}

module.exports = {
  greet: greet
}

// app.js
var greet5 = require('./greet.js'); // require('./greet.js').greet()
greet5.greet();                     // greet5()
```

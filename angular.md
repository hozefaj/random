### Useful angular learnings

> Modules: 

> Apps

> Controllers

### Dependency Injection: Rather than creating an object within a function, you pass it one.
```javascript
var Person = function(fname. lname) {
  this.firstname = fname;
  this.lastname = lname;
}

function logPerson(person){
  console.log(person);
}

var john = new Person('John', 'Doe');
logPerson(john); // dependency injection: passing object to the fuction 
                 // rather than creating it within the function

```

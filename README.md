## Useful code snippets to use in web development

###Javascript Array useful functions
References

1. [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) to loop through array
2. [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to remove elements from array
3. [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to modify array and store into a new array
4. [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

```javascript
// create array
var list = [1, 
        'string', 
        { type: true }, 
        [1,2,3], 
        function(){console.log("function within an array")}
      ];

// push the begining of array
list.unshift('at the beginning');
// get first item in the array
var firstitem = list.shift();

// push at end of array
list.push(at the end);
//get the last item in the array
var lastitem = list.pop();

// loop through the array & perform operation
list.forEach(function(item) {
  console.log(item);
});

// filter out elements from array
list.filter(function(item) {
        if(item === <something>) return false;
        return true;
});

// modify the array
list = list.map(function(item){
        // do something
        return item;
});

// reduce the array....get an element based on some condition
var someItem = list.reduce(fucntion(previousValue, currentValue) {
        // some example code
        if(previousValue > currentValue) return previousValue;
        return currentValue;
})
```


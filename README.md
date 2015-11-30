## Useful code snippets to use in web development

###Javascript Array useful functions
References

1. [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) to loop through array
2. 

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

//loop through the array & perform operation
list.forEach(function(item) {
  console.log(item);
});
```


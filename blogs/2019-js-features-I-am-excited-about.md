---
title: JS 2019 features I am excited about
description: latest JS features published with ES2019 and see how they solve problems and I am most excited about
tags: JS, frontend, webdev, es2019
---

[TC39](https://github.com/tc39/proposals) over the past few years have been giving yearly updates to the JS. This works much better than throwing a ton of updates very years. This gives developers an opportunity to learn in a better and even from the browser point of view making the features available.

From the 2019 feature set, below are a few that I am most excited about.

### 1. `trimStart()` and `trimEnd()`

Added on the `String` prototype

This allows trimming of whitespace at the start and end of a string. We already have the `trim()` function but this does it at both ends. There can be a use case where you might keep the whitespace at either end.

```javascript
const paddedStr = ' How new trim functions work '
paddedStr.trimStart() // prints 'How new trim functions work '
paddedStr.trimEnd() // prints ' How new trim functions work'
paddedStr.trim() // prints 'How new trim functions work'

```

### 2. `flat()`

Added on the `Array` prototype

This helps with flattening of multi-dimensional arrays. It takes an optional parameter that tells the function how many levels deep we want to flatten. The default value is 1.

```javascript
const oneLevelNesting = ['bread', ['peanut butter', 'jelly'], 'bread'];
oneLevelNesting.flat() // ['bread', 'peanut butter', 'jelly', 'bread']

const twoLevelNesting = ['bread', [['peanuts', 'oil'], ['strawberries', 'sugar']], 'bread'];
twoLevelNesting.flat() //  ['bread', ['peanuts', 'oil'], ['strawberries', 'sugar'], 'bread']
twoLevelNesting.flat(2) // ['bread', 'peanuts', 'oil', 'strawberries', 'sugar', 'bread']

```

### 3. Optional `catch` binding
Optional catch binding allows you to write a try/catch without having to use the error parameter with `catch`.


```javascript
//before
try {
   doSomething()
} catch(error) {
   console.log("Not using the error parameter here but have to include it")
}
// after
try {
   doSomethingElse()
} catch {
   console.log("No param? No Problem!")
}
```

There are other features other than these like [`flapMap()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap), [` Object.fromEntries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries), another one is adding a description to `Symbol` property. Personally, I have not found the need for these in my experience.

*For a deeper understanding of all these features I recommend watching [`javascript-es2019-in-practice`](https://egghead.io/courses/javascript-es2019-in-practice) on egghead.io.*

Would love to hear thoughts of others on what features are they most excited about.

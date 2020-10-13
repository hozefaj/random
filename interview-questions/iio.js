// PROBLEM
/* var skillSet = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];
*/

/* =>
[
  { skill: 'css', users: [ 'Bill', 'Sue' ], count: 2 },
  { skill: 'javascript', users: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
  { skill: 'html', users: [ 'Sue' ], count: 1 }
] */

/* PROBLEM
Design a data structure that supports the following three operations.
1. a constructor that takes a parameter K(int) which determines the size of the data structure
2. add(x) -- inserts the number x
3. get() -- returns the product of the last K elements inserted

considerations
- if more elements than k are inserted remove the elements in the order they were added
- what happens when we add(0)...edge case that needs to be accounted for
- calling get before any values are added in the array
- for JS type of solution using `reduce` method is handy

test cases
- k=3, [3,5,6];
- k=3, [6,7,8,9],
- k=3, [5,6,0,9,5,6]
- k=0, [4,5]



Additional complexity to the problem
1. add(x) -- inserts the number x
2. get(K) -- returns the product of the last K elements inserted
*/


/* PROBLEM
1. Support subscribing to events.
const emitter = new Emitter();
const sub = emitter.subscribe('test', () => {console.log('hi....')});
const sub2 = emitter.subscribe('event_name2', cbA);
const sub3 = emitter.subscribe('event_name3', cbB);


2. Support emitting events.
This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.
emitter.emit('test', 'foo', 'bar', ...);

3. Support unsubscribing existing subscriptions by releasing them.
sub.release(); // `sub` is the reference returned by `subscribe` above
*/

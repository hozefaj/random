### System Design

Some resources to learn more about system design
1. https://github.com/donnemartin/system-design-primer 
2. Success in tech: https://www.youtube.com/channel/UC-vYrOAmtrx9sBzJAf3x_xw
3. Exponent: https://www.youtube.com/channel/UCjm_qVkCPjOVDz9BWjNqO9A
4. Very good youtube videos: https://www.youtube.com/c/GauravSensei

Some useful reading,
1.  Architecture Issues Scaling Web Applications: http://venkateshcm.com/2014/05/Architecture-Issues-Scaling-Web-Applications/
2. Designing Web Applications: https://docs.microsoft.com/en-us/previous-versions/msp-n-p/ee658099(v=pandp.10)?redirectedfrom=MSDN
3. Index Table: https://docs.microsoft.com/en-us/azure/architecture/patterns/index-table
4. Sharding Pattern: https://docs.microsoft.com/en-us/azure/architecture/patterns/sharding


Make sure you understand the technologies you chose for your design and aren't just using the latest buzz word.
They’ll be looking for how you make design decisions, how strong the design is, and does the design fulfill the requirement.
They will also be interested in how you take design suggestions into account.
In the best cases, we hope the interviewer can learn something from you.

In general your interviewer will care about: Trade-Offs, Communication, Logical Reasoning, Technical Curiosity, and Execution.

// -----------------------------------------------------------------------------------
### JS Problem 
```js
var input = [
  { 'skill': 'css', 'user': 'Bill' },
  { 'skill': 'javascript', 'user': 'Chad' },
  { 'skill': 'javascript', 'user': 'Bill' },
  { 'skill': 'css', 'user': 'Sue' },
  { 'skill': 'javascript', 'user': 'Sue' },
  { 'skill': 'html', 'user': 'Sue' }
];

output = [
  { 'skill': 'css', 'users': [ 'Bill', 'Sue' ], 'count': 2 },
  { 'skill': 'javascript', 'users': [ 'Chad', 'Bill', 'Sue' ], 'count': 3 },
  { 'skill': 'html', 'users': [ 'Sue' ], 'count': 1 }
]
```

### JS Problem
Design a class that supports the following three operations.
1. a constructor that takes a parameter K(int) which determines the size of the data structure
2. add(x) -- inserts the number 'x' into the data structure
3. get() -- returns the product of the last K elements inserted

constraints
- k denotes the max size of the data structure
- optimize for time complexity of the "get" function

considerations
- if more elements than k are inserted remove the elements in the order they were added
- what happens when we add(0)...edge case that needs to be accounted for
- calling get before any values are added in the array
- for JS type of solution using `reduce` method is handy

test cases
- k=3, [3,5,6];
- k=3, [6,7,8,9],
- k=3, [5,6,2,0,9,5,6]
- k=0, [4,5]

Design a new class that supports the following two operations
1. add(x) -- inserts the number 'x' into the data structure
2. get(K) -- returns the product of the last K elements inserted

### JS Problem
1. Support subscribing to events. 
The subscribe function takes in an event_name and callback as parameters
```js
const emitter = new Emitter();
const sub = emitter.subscribe('event_name1', () => {console.log('hi....')});
const sub2 = emitter.subscribe('event_name2', cbA);
const sub3 = emitter.subscribe('event_name3', cbB);
```

2. Support emitting events.
This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.
emitter.emit('event_name', 'foo', 'bar', ...);

3. Support unsubscribing existing subscriptions by releasing them.
sub.release(); // `sub` is the reference returned by `subscribe` above

### JS Problem
// implement getElementsByClassname(root, classname)

// implement setInterval, setTimeout

### Algo Problem
https://wiki.wlth.fr/display/PO/Data+structure+design+of+a+dictionary
Part 1:

Given a word as input from the user, the dictionary will lookup its definition or indicate that a definition was not found.

It should have the ability to…

1. Given a word, lookup definition
2. Print all words and defs in alphabetical order by word
3. Write ops:
    add (word, def)
    update def of a word
    remove a word

Constraints:
1. We care most about lookup and want it to have the fastest possible performance
2. Given the best possible performance for lookup, we want to achieve the best possible performance for “print all”
3. Given the above, we want to achieve the best possible performance for write ops

Non-constraints:
1. infinite memory

Part 2:
-Implement a method “printTopMostQueried” to print the top K most looked up words in descending order of lookups

-We want to be able to update this in real time on each lookup — we know this might incur a performance hit on our lookup

-We care equally about the performance hit incurred on lookup and the performance of “printTopMostQueried”.

-We are no longer adding or removing words from the Dictionary and therefore do not care about how this new functionality will interact with add / remove.

-K is a static number in the range 0 < K <= log(N)

Come up with:
  A general data structure design to support this new use-case
  What are the best and worst case scenarios?
  Big-O (worst case) of printTopMostQueried and lookup

Solution
Hints and questions to ask
Part 1:
1. As needed, clarify that words and definitions can both be stored as String. The underlying Key/Value data types do not affect the implementation of this problem.
The candidate should quickly arrive at the insight that a Dictionary is a map-like structure.
2. From that, they should be able to posit that a HashMap would allow the querying use case to happen in O(1) time.
    A HashMap by itself would also allow for write operations to be done in ~O(1) time.
    The rub here is of course with the alphabetical listing use case.
    Hopefully, the candidate is able to determine that some kind of ordered (tree-like) structure is necessary here to handle this.

Solution:
  A data structure that handles all use cases and appropriately prioritizes the performance of the use cases would consist of the following:
  A HashMap / HashTable with word as the key and definition as the value
  A TreeSet containing the words, which can be iterated through in order via an in-order traversal
  The ideal solution will offer Big O performance of:
    O(1) for querying and updating (the update method should throw or reach some error condition if the word isn't already in the dictionary since otherwise we want to add to both the Map and the TreeSet)
    O(N) for alphabetical listing, where N is the number of entries in the dictionary
    O(log N) for adding and deleting
  The overall data structure will have a Big O space complexity of O(N).

Part 2:
Candidate should quickly conclude that we probably want another HashMap to store the query counts for each word
We also want some sort of sequential data structure to keep the top K words in descending order. 
The ideal solution here is another TreeSet primarily keyed on the query count of the word using the word itself to break ties (demonstrated in solution below). 

A less ideal but acceptable solution is to use an ordered List. The new data structure in either case should be limited to K elements.
Candidate should be able to describe some of the general cases that follow from updating the query count of the word:
  Word is not in Top K but now should be in Top K: O(log K) operation to update TreeSet or O(K) operation to update the List. Also need to evict the current lowest query count item in the Top K.
  Word is already in Top K: we need to reorder the word. O(log K) operation to remove and re-add to TreeSet. O(K) operation to reorder in List.
  Word is not in Top K and shouldn't be in Top K. Simply increment the query count of the word. 
  How expensive is it to check whether we need to promote the word to the Top K? 
  With a List, we can do this in O(1): get the last element in an ArrayList or maintain a pointer to the last element in the LinkedList. Without any additional tracking mechanism, it is O(log K) to check this for the TreeSet. We can make it O(1) by separately tracking the "cutoffWord" as a separate variable and updating that every time we update the top K (demonstrated in solution below).
Ad
ding this functionality to our lookup method makes it an O(K / log K) operation.
  Senior candidate follow-up question: There are a couple ways to remediate this:
  If we are strict about updating the order in near real time: relegate the reordering logic to its own thread (demonstrated in solution below).
  We can push back on the real time aspect of the ordering update: instead of immediately updating the order on each query, keep track of a Map<Word, Integer> batchUpdates. 
    At some regular cadence, probably in a separate thread, update the query counts and ordering in batch from those updates.
  Junior candidate follow-up question (if they used a List structure for part 1):
If we changed the bounds of K to the range log(N) < K <= N, a strong candidate should now be able to realize that a Tree-like data structure is the ideal solution here and speak to the considerations of using a TreeSet above.



// filter the below homes array for only homes that include
// _all_ of the below 'needs'.

// (Home 1 and Home 3)
const needs = ['wifi', 'shower', 'laundry'];

const homes = [{
  name: 'Home 1',
  wifi: 'y',
  shower: 'y',
  laundry: 'y',
  metro: 'n',
  balcony: 'y',
  fireplace: 'n',
  pool: 'y'
}, {
  name: 'Home 2',
  wifi: 'n',
  shower: 'y',
  laundry: 'y',
  metro: 'n',
  balcony: 'n',
  fireplace: 'n',
  pool: 'n'
}, {
  name: 'Home 3',
  wifi: 'y',
  shower: 'y',
  laundry: 'y',
  metro: 'n',
  balcony: 'y',
  fireplace: 'y',
  pool: 'n'
}, {
  name: 'Home 4',
  wifi: 'y',
  shower: 'y',
  laundry: 'n',
  metro: 'n',
  balcony: 'n',
  fireplace: 'n',
  pool: 'n'
}];

// my solution(not the most optimum)
var answer = {};

needs.forEach((elem, idx) => {
  if(idx === 0) {
    answer[idx] = homes.filter((home) => home[elem] === 'y');
  } 
  else {
     answer[idx] = answer[idx-1].filter((home) => home[elem] === 'y'); 
  }  
})

console.log(answer[needs.length-1])

// good solution
console.log(homes.filter((home) => needs.every((need) => home[need] === 'y')))

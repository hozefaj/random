###First callbacks
```javascript
// what callback looks like
function getTempCallbacks(location, callback) {
  callback(undefined, 90);
  callback('City not found');
}

// executing the function
getTempCallbacks('Chicago', function(err, temp){
  if(err){
    console.log('City not found', err);
  } else {
    console.log(temp);
  }
});
```

###Now PROMISES
```javascript
function getTempPromise(location) {
  return new Promise(function (resolve, reject){
    resolve(80);
    reject('City not found');
  });
}

getTempPromise(location).then(function(temp){
  console.log('promise success', temp);
}, function(err) {
  console.log('City not found', err);
});
```

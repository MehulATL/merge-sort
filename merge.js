// a function that takes 2 sorted arrays and returns one sorted array 
// containing all members of the input arrays.

var merge = function(a, b){
  var result = [];
  var aCopy = a.slice(0);
  var bCopy = b.slice(0);
  while((aCopy.length > 0) || (bCopy.length > 0)){
    if (aCopy[0] <= bCopy[0]){
      result.push(aCopy.shift());
    } else {
      result.push(bCopy.shift());
    }
  }
  return result;
};

var mergeSort = function(a){
  if ((a.length === 1) || (a.length === 0)){
    return a;
  } 
  //console.log(a);
  var pivot = parseInt(a.length/2, 10);
  var rightHalf = mergeSort(a.slice(pivot)); // this will recurse until full sorted
  var leftHalf = mergeSort(a.slice(0, pivot));

  return merge(rightHalf, leftHalf); 
};

//console.log(mergeSort([4,1,2,3]));

// var a = [1,2,3];
// var b = [2,3,4,99];
// merge(a,b) will return [1,2,2,3,3,4,99]

// works even when input arrays aren't the same length.
// TODO: split up a mixed array into 2 sorted arrays to finish merge sort.
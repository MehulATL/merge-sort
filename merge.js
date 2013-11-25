
// the merge function is going to be the workhorse of our implementation.
// it takes 2 arrays and merges them into one ordered array.
var merge = function(leftHalf, rightHalf){
  var result = [];

  // We need to check whether the first or second array starts with
  // the smaller number and push it into our result array.
  while (leftHalf.length && rightHalf.length) {
    if (leftHalf[0] <= rightHalf[0]) {
      result.push(leftHalf.shift());
    } else {
      result.push(rightHalf.shift());
    }
  }

  while (leftHalf.length){
    result.push(leftHalf.shift());
  }
  while (rightHalf.length){
    result.push(rightHalf.shift());
  }
  return result;
}

// I've added the optional parameter fn and a few lines of to mergeSort()
// to all for polymorphism. Polymorphism allows our function
// to work with other datatypes, such as objects.
var mergeSort = function(array, fn){
  fn = (typeof(fn) === 'function') ? fn : function(a, b){
    if (a < b){
      return - 1;
    } else if (a === b){
      return 0;
    } else {
      return 1;
    }
  };

  // the base case for our recursion.
  if (array.length < 2){
    return array;
  }

  // split our input array in half
  var getHalf = parseInt(array.length / 2);
  var leftHalf = array.slice(0, getHalf);
  var rightHalf = array.slice(getHalf, array.length);

  // using recursion to continue splitting our array, and then feeding the results
  // to our merge function to construct our final output array.
  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

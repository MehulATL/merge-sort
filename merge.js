// a function that takes 2 sorted arrays and returns one sorted array 
// containing all members of the input arrays.

var a = [1,2,3];
var b = [2,3,4];

var merge = function(a, b){
  var result = [];
  while((a.length > 0) || (b.length > 0)){
    if (a[0] <= b[0]){
    //for (var i = 0; i < a.length; i++){
    //result.push(a[i])
      result.push(a.shift());
    } else {
      result.push(b.shift());
    }
  }
  return result;
};

// TODO: allow merge to work with arrays of uneven length.
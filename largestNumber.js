
function largestOfFour(arr) {
  // You can do this!
  var result = [];
  
  for (var i = 0; i < arr.length; i++){
    var maxNum = 0;
    for (var j = 0; j < arr[i].length; j++){
      if(arr[i][j] > maxNum){
        
        maxNum = arr[i][j];
      }
      
    }
    result[i] = maxNum;
  }
  return result ;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

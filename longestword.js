
function findLongestWord(str) {
  var arrStr = str.split(" ");
  var maxLength = 0;
  
  for (var i = 0; i < arrStr.length; i++){
    if (arrStr[i].length > maxLength){
      maxLength = arrStr[i].length;
    }
  }
  return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

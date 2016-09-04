
function repeatStringNumTimes(str, num) {
  // repeat after me
  var temp = "";
  for(var i = 0; i<num; i++){
    
    temp += str;
  }
  return temp;
}

repeatStringNumTimes("abc", 3);


function palindrome(str) {
  // Good luck!
  var re = /[\W_]/g;
  var lowerCStr = str.replace(re, '').toLowerCase();
  var arrStr = lowerCStr.split('');
  var reversedStr = arrStr.reverse().join('') ;
  
  if (reversedStr === lowerCStr){
    return true;
  } return false;
}



palindrome("eye");

/* Created on 28 July 2016 by Daniel Ekwuazi*/

var Person = function(firstAndLast) {
    var fullName = firstAndLast;
  
  this.getFirstName = function(){
    return fullName.split(" ")[0];
  };
  
  this.getLastName = function(){
    return fullName.split(" ")[1];
  };
  
  this.getFullName = function(){
    return fullName;
  };
  
  this.setFirstName = function(first){
     var firstName  = first;
     fullName = firstName + " " + fullName.split(" ")[1];
  };
  
  this.setLastName = function(last){
     var lastName  = last;
    fullName = fullName.split(" ")[0] + " " + lastName;
  };
  
  this.setFullName = function(name){
     fullName = name;
    return fullName;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();

// Cleaner aproach 

/* 
var Person = function(firstAndLast) {

  var fullName = firstAndLast;
  var arr = fullName.split(' ');

  this.getFirstName = function() {
    return arr[0];
  };

  this.getLastName = function() {
    return arr[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(first) {
    arr[0] = first;
    fullName = arr.join(' ');
  };

  this.setLastName = function(last) {
    arr[1] = last;
    fullName = arr.join(' ');
  };

  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
    arr = fullName.split(' ');
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
*/

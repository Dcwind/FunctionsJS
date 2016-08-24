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

var speed = 65;

// simple speed notification function
if (speed > 80 ) {
	// Use console.log() to print "Slow down"
	console.log("slow down mofo");
} 
else {
	// Use console.log() to print "Drive safe"
    console.log("Drive safe");

}




// quarter function
var quarter = function(number){
    return number/4;
}


if (quarter(12) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}

// get sleep :)
var sleepCheck = function (numHours){
    if(numHours >= 8){
        return "You're getting plenty of sleep! Maybe even too much!";
    }
    else{
        return "Get some more shut eye!";
    }
}  

sleepCheck(10);
sleepCheck(5);
sleepCheck(8);

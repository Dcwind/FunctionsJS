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

// Check if the user is ready to play!

confirm("Ready to play?");
var age = prompt("What's your age");

if (age < 13){
    console.log("You are allowed to play but I take no responsibility");
}else{
    console.log("Play on!");
}
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");

console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");


// quarter function
var quarter = function(number){
    return number/4;
}


if (quarter(12) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}

var userAnswer = prompt('Do you want to race Bieber on stage?"');

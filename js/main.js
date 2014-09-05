var number = Math.floor(Math.random()*100);
var previousGuess = 0;
var guessNum;

console.log(number);

function checkForm() {
	
	while(true) {
	console.log(previousGuess);
		
		guessNum = prompt("Guess a number");
		
		if (isNaN(guessNum) || (guessNum == ""))
		{
			alert("Not a match! Use a number");
		} else if (guessNum >= 100 || guessNum <= 0) {
			alert("Enter a number between 0 and 100");
			// break;
		} else {
			
			if(checkRange(guessNum)){
			 	break;
			}
		}
		
	}

}

var checkRange = function(Num){

	if (parseInt(Num) === number)
	{				
		alert('You are right');
		return true;
	}
	else if(previousGuess === undefined || Math.abs(number - previousGuess) > Math.abs(number - guessNum))
	{
		alert('You are hot!');
	}
	else
	{
		alert("You are cold");
	} 
	previousGuess = guessNum;
}

checkForm();
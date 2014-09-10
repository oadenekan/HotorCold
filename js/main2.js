var computerChoice = Math.floor(Math.random()*100);
var previousGuess = 0;
var guessNum;

var game = {
	init: function() {
		$("#reset").click(game.reload);
		$("#guessBtn").click(game.check);
	},

	
	reload: function(){
		location.reload();
	},

	
	check: function(guessNum){
		guessNum = parseInt($("#guess").val());
		console.log(guessNum);
		if (isNaN(guessNum) || (guessNum === ""))
			{
				alert("Not a match! Use a number");
			} 
		else if (guessNum > 100 || guessNum < 0) 
			{
				alert("Enter a number between 0 and 100");
				$("#guess").val("");
			} 
		else 
			{	
				(game.checkRange());
			}
	},

	
	checkRange: function(num){
			guessNum = parseInt($("#guess").val());
			alert('guessNum: ' + guessNum  +' previousGuess: ' + previousGuess);
			if (guessNum == computerChoice)
			{				
				alert('You are right');
				return true;
			}
			else if(Math.abs(computerChoice - previousGuess) > Math.abs(computerChoice - guessNum))
			{
				alert('You are hot!');
				$("#guess").val("");
			}

			else
			{
				alert("You are cold");
				$("#guess").val("");
			} 
			 previousGuess = guessNum;
	},
}


$(document).ready(game.init);
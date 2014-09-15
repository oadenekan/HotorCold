var computerChoice = Math.floor(Math.random()*100);
var previousGuess = 0;
var guessNum;

var game = {
	init: function() {
		$("#reset").click(game.reload);
		$(".outerDiv").hide();
		$("#guessBtn").click(function(event) {
			event.preventDefault();
			game.check();
		});
	},

	
	reload: function(){
		location.reload();
	},

	
	check: function(guessNum){
		guessNum = ($("#guess").val());
		console.log(guessNum);
		if (isNaN(guessNum) || (guessNum === ""))
			{
				$('.outerDiv').html("Not a match! Use a number")
				$("#guess").val("");
			} 
		else if (guessNum > 100 || guessNum < 0) 
			{
				$('.outerDiv').html("Enter a number between 0 and 100")
				$("#guess").val("");
			} 
		else 
			{	
				(game.checkRange());
			}
			$('.outerDiv').show();
	},

	
	checkRange: function(num){
			guessNum = ($("#guess").val());
			if (guessNum == computerChoice)
			{				
				$('.outerDiv').html("You are right")
				return true;
			}
			else if(Math.abs(computerChoice - previousGuess) > Math.abs(computerChoice - guessNum))
			{
				$('.outerDiv').html("You are hot")
				$("#guess").val("");
			}

			else
			{
				$('.outerDiv').html("You are cold")
				$("#guess").val("");
			} 
			 previousGuess = guessNum;
	},
}


$(document).ready(game.init);
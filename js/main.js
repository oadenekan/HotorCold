// var number = Math.floor(Math.random()*100);
// // var previousGuess = 0;
// var guessNum = parseInt($("#guess").val());

// console.log(number);

// function checkForm() {
	
// 	while(true) {
// 	console.log(previousGuess);
		
// 		guessNum = prompt("Guess a number");
		
// 		if (isNaN(guessNum) || (guessNum == ""))
// 		{
// 			alert("Not a match! Use a number");
// 		} else if (guessNum >= 100 || guessNum <= 0) {
// 			alert("Enter a number between 0 and 100");
// 			// break;
// 		} else {
			
// 			if(checkRange(guessNum)){
// 			 	break;
// 			}
// 		}
		
// 	}

// }

// var checkRange = function(Num){

// 	if (parseInt(Num) === number)
// 	{				
// 		alert('You are right');
// 		return true;
// 	}
// 	else if(previousGuess === undefined || Math.abs(number - previousGuess) > Math.abs(number - guessNum))
// 	{
// 		alert('You are hot!');
// 	}
// 	else
// 	{
// 		alert("You are cold");
// 	} 
// 	previousGuess = guessNum;
// }

// checkForm();

// $("#reset").click(function (){
// 	number = Math.floor(Math.random()*100);	
// 	console.log(number);
// })

// $("#guessBtn").click(function (){
// 	guessNum = parseInt($("#guess").val());
// 	if (isNaN(guessNum) || (guessNum === ""))
// 		{
// 			alert("Not a match! Use a number");
// 		} 
// 	else if (guessNum > 100 || guessNum < 0) 
// 		{
// 			alert("Enter a number between 0 and 100");
		
// 		} 
// 	else 
// 		{	
// 			(checkRange(guessNum));
// 		}

// })
// var checkRange = function(Num){
// 	var previousGuess = Num;
// 	$("#guessBtn").click(function (){
// 	guessNum = parseInt($("#guess").val());
// 	if (parseInt(Num) === number)
// 	{				
// 		alert('You are right');
// 		return true;
// 	}
// 	else if(previousGuess === undefined || Math.abs(number - previousGuess) > Math.abs(number - guessNum))
// 	{
// 		alert('You are hot!');
// 	}
// 	else
// 	{
// 		alert("You are cold");
// 	} 
	
// }
var number = Math.floor(Math.random()*100);
var previousGuess = 0;
var guessNum;
console.log(guessNum);
var game = {

	reset: function(event){
		$("#reset").click(game.reload);
		},

	reload: function(){
		guessNum = Math.floor(Math.random()*100);
		previousGuess = 0;
	},

	checkForm: function(){
		$("#guessBtn").click(game.check);
	},

	check: function(guessNum){
		guessNum = parseInt($("#guess").val());
		if (isNaN(guessNum) || (guessNum === ""))
			{
				alert("Not a match! Use a number");
			} 
		else if (guessNum > 100 || guessNum < 0) 
			{
				alert("Enter a number between 0 and 100");
			} 
		else 
			{	
				(game.checkRange);
			}
	},

	checkRange: function(num){
		var previousGuess = Num;
		$("#guessBtn").click(function (){
			guessNum = parseInt($("#guess").val());
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
	
		}	


	
// var 
// $("#guessBtn").click(function(){
// 	if(isNaN(guessNum) || (guessNum ===""))
// 	{
// 		alert("Not a match! Use a number");
// 	}

// 	if(guessNum > 100 || guessNumm < 0)
// 	{
// 		alert("Enter a number between 0 and 100");
// 	}
// 	else
// 	{
// 		checkRange();
// 	}

// var checkRange = function(num){
// 	previousGuess = num;

// }


// 	parseInt("#guess").val();
// })

$(document).ready(function(){
	// var comp = 50;
	var comp = Math.floor(Math.random() * 100);
	var curr_guess;
	var num_input =0;
	var prev_guess;
	var diff1;
	var diff2;
	console.log(comp);

	$("#play").click(function() {
		location.reload();

	});

	$("#form").submit(function(event){
		event.preventDefault();
		curr_guess = parseInt($("#guess").val());
		if(num_input===0){
			if (curr_guess === comp) {
				$("#result").html("You Won!!!");
			}
			else{
			$("#result").html("You are Hot");
			prev_guess=curr_guess;
			form.reset();
				}
		}

		else{
			diff1= Math.abs( comp - prev_guess);
			diff2= Math.abs(comp - curr_guess);
			console.log("diff1 is " + diff1);
			console.log("diff2 is " + diff2);
			console.log("curr_guess is " + curr_guess);
			console.log("prev_guess is " + prev_guess);

			if(curr_guess === comp){
				$("#result").html("You Won!!!");
			}
			else if (diff2 < diff1) {
				$("#result").html("Hot" + " " + ((diff1 / (diff1 + diff2))*100) + "%");
				console.log((diff1 / (diff1 + diff2)));
			}
			else if (diff2  > diff1) {
				$("#result").html("Cold" + " " + ((diff1 / (diff1 + diff2))*100) + "%");	
				// console.log((diff1 / (diff1 + diff2)));	
			}
		}
		prev_guess = curr_guess;
		num_input++;
		form.reset();
		//curr_guess =prev_guess;
	});

});
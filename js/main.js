$(document).ready(function() {

	//Global variable named "playerturn" being made for Noughts and Crosses game.


	var playerturn = "x";

	$(".game-wrapper td").on("click", function() {
		if($(this).text() == "") {

			$(this).text(playerturn);

			checkwinner(playerturn);

			if(playerturn =="x") {
				$("#player1").css("background", "rgba(156, 9, 9, 0.72)");
				$("#player2").css("background", "rgba(12, 130, 65, 0.72)");
				playerturn = "o";
				for(var i = 1; i <= 3; i++) {
					var apiURL = bulbIP + apiKey + "/lights/" + i;
					power(apiURL, false);
				}
				for(var i = 4; i <= 6; i++) {
					var apiURL = bulbIP + apiKey + "/lights/" + i;
					color(apiURL, 140, [0.2, 0.2]);
				}
			}	



			else {
				playerturn ="o" 
				$("#player2").css("background", "rgba(156, 9, 9, 0.72)");
				$("#player1").css("background", "rgba(12, 130, 65, 0.72)");
				playerturn = "x";
				for(var i = 1; i <= 3; i++) {
					var apiURL = bulbIP + apiKey + "/lights/" + i;
					color(apiURL, 140, [0.2, 0.2]);
				}


				for(var i = 4; i <= 6; i++) {
					var apiURL = bulbIP + apiKey + "/lights/" + i;
					power(apiURL, false);

				}

			

	}
}
});


//If statement used within a function called "checkwinner".
//This code enables the cells in the game's HTML table to check if X or O has appeared three times in a row.
//This will then declare the winner and will automatically modify the H2 header in the game HTML file.  


function checkwinner(turn){

if(
	$("#1").text() == $("#2").text() && $("#2").text() == $("#3").text() && $("#1").text() != "" || 
	$("#4").text() == $("#5").text() && $("#5").text() == $("#6").text() && $("#4").text() != "" || 
	$("#7").text() == $("#8").text() && $("#8").text() == $("#9").text() && $("#7").text() != "" || 
	$("#1").text() == $("#4").text() && $("#4").text() == $("#7").text() && $("#1").text() != "" || 
	$("#2").text() == $("#5").text() && $("#5").text() == $("#8").text() && $("#2").text() != "" || 
	$("#3").text() == $("#6").text() && $("#6").text() == $("#9").text() && $("#3").text() != "" || 
	$("#1").text() == $("#5").text() && $("#5").text() == $("#9").text() && $("#1").text() != "" || 
	$("#7").text() == $("#5").text() && $("#5").text() == $("#3").text() && $("#7").text() != "") {

$("#winnerlose-header").text(turn.toUpperCase() + " WINS");



}




}


});	

	





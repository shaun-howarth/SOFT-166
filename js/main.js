$(document).ready(function() {

	var playerturn = "x";

	$(".game-wrapper td").on("click", function() {
		if($(this).text() == "") {

			$(this).text(playerturn);

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
});
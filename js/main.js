$(document).ready(function() {

	var playerturn = "x";

	$(".game-wrapper td").on("click", function() {
		if($(this).text() == "") {

			$(this).text(playerturn);

			if(playerturn =="x") {
				$("#player1").css("background", "rgba(156, 9, 9, 0.72)");
				$("#player2").css("background", "rgba(12, 130, 65, 0.72)");
				playerturn = "o";
			}	



			else 
		{
			playerturn ="o" 
			$("#player2").css("background", "rgba(156, 9, 9, 0.72)");
			$("#player1").css("background", "rgba(12, 130, 65, 0.72)");
			playerturn = "x";

		}




		}

	});
});
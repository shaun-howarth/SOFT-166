$(document).ready(function(){

	var playerturn = "x";



	$(".game-wrapper td").on("click" , function(){



		if ($(this).text() == "") {
			$(this).text(playerturn);
			if (playerturn =="x"){
				playerturn = "o";

			}	



			else {

				playerturn = "x";

			}
		}







		


	});



















});
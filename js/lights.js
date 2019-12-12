var bulbIP ="http://192.168.0.50/api/";

var apiKey = "stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz";

var apiURL = bulbIP + apiKey + "/lights/1";


function color(url, brightness, color){
$.ajax({
	url:url + "/state",
	type: "PUT",
	data:JSON.stringify({"on": true, "bri": brightness, "xy":color}),
	success:function(data){
		console.log(data);





}


});

}
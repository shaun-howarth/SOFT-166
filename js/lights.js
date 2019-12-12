var bulbIP ="http://192.168.0.50/api/";

var apiKey = "stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz";

function power(url, power){
	$.ajax({
		url:url + "/state",
		type: "PUT",
		data:JSON.stringify({"on":power}),
		success:function(data){
			console.log(data);
		}
	});
}
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
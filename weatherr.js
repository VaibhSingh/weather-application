$(document).ready(function(){

$('#submitWeather').click(function(){

	var city = $("#city").val();	
	if(city != ''){
	$.ajax({

		url:'http://api.openweathermap.org/data/2.5/weather?q=' + city  +"&units=metric" + "&APPID=0050d359f9105e5eacbcd3292b4b31a8",
		type: "GET",
		dataType: "jsonp",
		success: function(data){
			//console.log(data);
			var widget = show(data);
			$("#show").html(widget);
			$("#city").val('');
		}

		});

	}else{
	$("#error").html("<div class='alert alert-danger' id ='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Field cannot be empty</div>");

	}

});

});

function show(data){

	return  "<h2><strong>Current Weather for </strong>: "+ data.name + ", " + data.sys.country+ "</h2>" +
			"<h2><strong>Weather</strong>: "+ data.weather[0].main +"</h2>" +
			"<h2><strong>Description</strong>: "+ data.weather[0].description +"</h2>" +
			"<h2><strong>Temperature</strong>: "+ data.main.temp +"° C</h2>" +
			"<h2><strong>Humidity</strong>: "+ data.main.pressure +" hPa</h2>" +
			"<h2><strong>Pressure</strong>: "+ data.main.humidity +"%</h2>" +
			"<h2><strong>Min. Temperature</strong>: "+ data.main.temp_min +"° C</h2>" +
			"<h2><strong>Max. Temperature</strong>: " + data.main.temp_max +"° C</h2>" +
			"<h2><strong>Wind Speed</strong>: " + data.wind.speed + " m/s</h2>" +
			"<h2><strong>Wind Direction</strong>: " + data.wind.deg +"°</h2><br>" ;
}
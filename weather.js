var getWeather= function(){
	var request = new XMLHttpRequest();
	request.open("GET","https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2471217/",true);
	request.send();
	request.onload= function(){
		var data= JSON.parse(this.response);
		var temp= document.getElementById("r1");
		var minTemp= document.getElementById("r2");
		var maxTemp= document.getElementById("r3");
		var windSpeed= document.getElementById("r4");
		var currentTemp= document.getElementById("r5");
		var humid= document.getElementById("r6");
		var visibility= document.getElementById("r7");
		temp.innerHTML= data.consolidated_weather[0].weather_state_name;
		minTemp.innerHTML= Math.floor((data.consolidated_weather[0].min_temp*(9/5))+32);
		maxTemp.innerHTML= Math.floor((data.consolidated_weather[0].max_temp*(9/5))+32);
		windSpeed.innerHTML= data.consolidated_weather[0].wind_speed;
		currentTemp.innerHTML = Math.floor((data.consolidated_weather[0].the_temp*(9/5))+32);
		humid.innerHTML= data.consolidated_weather[0].humidity;
		visibility.innerHTML= data.consolidated_weather[0].visibility;

	}
}
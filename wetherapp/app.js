
console.log("start weather app");

var weather = require('./weather.js');
weather().then(function(currenWeather){
	console.log(currenWeather);
}, function(error){
	console.log(error);
});




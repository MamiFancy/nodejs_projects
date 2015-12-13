var request = require('request');
var Promise = require('promise');
var url = 'http://www.weather.com.cn/adat/sk/101010100.html';

module.exports = function() {
	return new Promise(function(resolve, reject) {

		request({
			url: url,
			json: true
		}, function(error, reesponse, body){
				if(error) {
					reject('its getting error!');
				} else {
					resolve('city - ' + body.weatherinfo.city + ': ' + body.weatherinfo.WD + ' at '+ body.weatherinfo.time);
				}

		});

	});
		
}




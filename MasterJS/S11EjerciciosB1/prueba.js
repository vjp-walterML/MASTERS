const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://eod-historical-data.p.rapidapi.com/fundamentals/AAPL.US?filter=General%3A%3ACode%2CGeneral%2CEarnings",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "8afeefc9eamsh447df8250b85305p1c8be2jsnfae665174f47",
		"X-RapidAPI-Host": "eod-historical-data.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
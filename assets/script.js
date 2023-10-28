// 94c6c7b43a791e69d4a15652ecbb5912
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

var APIKey = "94c6c7b43a791e69d4a15652ecbb5912";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + geoLat + "&lon=" + geoLon + "&appid=94c6c7b43a791e69d4a15652ecbb5912"

var geoUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityCode + "," + countryCode + "&exclude=minutely,hourly,alerts&units=imperial&appid=7d1b285353ccacd5326159e04cfab063"

fetch(geoUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        geoLon = data[0].lon;
        geoLat = data[0].lat;
    });

fetch(queryURL)
    .then(response => response.json())
    .then(data => {
    // Process the data here
    console.log(data);
})
    .catch(error => {
    // Handle any errors that occurred during the request
    console.error(error);
});



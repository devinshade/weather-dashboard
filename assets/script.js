// 94c6c7b43a791e69d4a15652ecbb5912
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

var APIKey = "94c6c7b43a791e69d4a15652ecbb5912";
// var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + geoLat + "&lon=" + geoLon + "&appid=94c6c7b43a791e69d4a15652ecbb5912"
var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');

document.getElementById('search-form').addEventListener('submit', function(e){
    e.preventDefault()
    var cityName = document.getElementById('search').value
    getGeo(cityName)
})

function getGeo(city) {
    var geoUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + APIKey
    fetch(geoUrl).then(function(response) {
        return response.json()
    }).then(function(geoData){
        var lat = geoData[0].lat;
        var lon = geoData[0].lon;
        var cityName = geoData[0].name;
        getWeather(lat, lon, cityName)
    })
}

function getWeather(lat, lon, cityName) {
    $('#current-weather').empty()
    var weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`
    fetch(weatherURL).then(response => response.json()).then(weatherData => {
        console.log(weatherData)
        var title = $('<h3>').text(cityName)
        console.log(title)
        $('#current-weather').append(title)
    })
    getForecast(lat, lon)
}

function getForecast(lat, lon) {
    var forecastURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`
    fetch(forecastURL).then(response => response.json()).then(forecastData => {
        console.log(forecastData)
        var forecastArray = []
        for (var i = 0; i< forecastData.list.length; i++) {
            let cardTime = forecastData.list[i].dt_txt.split(' ').pop()
            console.log(cardTime)
            if (cardTime === '12:00:00') {
                forecastArray.push(forecastData.list[i])
            }
            console.log(forecastArray)
        }

    })
}

// run api call for geo location

// use values to search for current weather and 5 day forecast
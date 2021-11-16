/*GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
*/
var search = {};

var citySearchEl = document.querySelector("#city-search");

var getWeatherApp = function(weather ) {
    var apiUrl = "api.openweathermap.org/data/2.5/" + weather + "?q=London,uk&APPID=aafe2831d3e25d02ec148392d69ee604";
    // make a request to the url
    fetch(apiUrl)
    .then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
}


var saveWeather = function() {
    var input = document.getElementById("city-search").value;
        localStorage.setItem("search", input);
}
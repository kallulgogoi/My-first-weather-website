const apiKey = "4a758dd1aed04dc3950175920231609";

function fetchWeatherData(location) {
    $.ajax({
        method: "GET",
        url: `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`,
        success: function (data) {
            $("#location").text(data.location.name);
            $("#country").text(data.location.country);
            $("#temp_value").text(`${data.current.temp_c}°C`);
            $("#humidity").text(`${data.current.humidity}%`);
            $("#wind_kph").text(`${data.current.wind_kph} kph`);
            $("#condition").text(data.current.condition.text);
            $("#weatherIcon").attr("src", `https:${data.current.condition.icon}`);
            $("#tz_id").text(data.location.tz_id);
            $("#temp_c").text(`${data.current.temp_c}°C`);
            $("#condition-text").text(data.current.condition.text);
        },
        error: function () {
            alert("Invalid location. Please try again!");
        }
    });
}

$("#search-button").click(function () {
    const location = $("#location-input").val().trim();
    if (location) {
        fetchWeatherData(location);
    } else {
        alert("Please enter a location!");
    }
});

function updateLocalTime() {
    $("#local-time").text(new Date().toLocaleTimeString());
}

setInterval(updateLocalTime, 1000);
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 1000); // Delay before animation starts (1 second)
});
const clickSound = new Audio("click.mp3");
const hoverSound = new Audio("hover.mp3");
$("#search-button").click(function () {
    clickSound.play();
    const location = $("#location-input").val().trim();
    if (location) {
        fetchWeatherData(location);
    } else {
        alert("Please enter a location!");
    }
});
$("td, .title, .weather-card").hover(
    function () {
        hoverSound.play();
    }
);

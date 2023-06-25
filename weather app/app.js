const url = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
const apikey = 'e52f8a1bd3e424ba4da2fe83c7f872cc';
const searchbox = document.querySelector(".search input"),
    searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon")

async function checkweather(city) {
    const response = await fetch(url + city + `&appid=${apikey}`)
    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }
    else{

    
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".tempt").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    if (data.weather[0].main == "Clear") {
        weathericon.src = "clear.png"
    }
    else if (data.weather[0].main == "Clouds") {
        weathericon.src = "clouds.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "drizzle.png"
    }
    else if (data.weather[0].main == "Humidity") {
        weathericon.src = "humidity.png"
    }
    else if (data.weather[0].main == "Mist") {
        weathericon.src = "mist.png"
    }
    else if (data.weather[0].main == "Rain") {
        weathericon.src = "rain.png"
    }

    else if (data.weather[0].main == "Snow") {
        weathericon.src = "snow.png"
    }
document.querySelector(".weather").style.display ="block";
    console.log(data)
    }
}
searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value)
})
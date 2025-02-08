function updateWeather(response){
    let temperatureElement=document.querySelector("#temperature");
    let temperature=response.data.temperature.current;
    let cityElement=document.querySelector("#city");
    let descriptionElement=document.querySelector("#description");
    let humidityElement=document.querySelector("#humidity");
    let windSpeedElement=document.querySelector("#wind-speed");
    let timeElement=document.querySelector("#time");
    let date=new Date(response.data.time * 1000);

    cityElement.innerHTML=response.data.city;
    temperatureElement.innerHTML=Math.round(temperature);
    descriptionElement.innerHTML=response.data.condition.description;
    humidityElement.innerHTML=`${response.data.temperature.humidity}%`
    windSpeedElement.innerHTML=`${response.data.wind.speed}km/h`
    timeElement.innerHTML=formatDate(date);
}
function formatDate(date){
    let minutes=date.getMinutes();
    let hours=date.getHours();
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day=days[date.getDay()];
    if (minutes<10){
        minutes=`0${minutes}`
    }
    if (hours<10){
        hours=`0${hours}`
    }
    return`${day} ${hours}:${minutes}`;
}
function searchCity(city){
    let apiKey = "a333o760297e40f639a8b85t1d99ebc0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(updateWeather);
}
function updateCity(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-form-input");
    searchCity(searchInput.value);
}
let searchElement=document.querySelector("#search-form");
searchElement.addEventListener("submit",updateCity);
searchCity("Burgersfort");
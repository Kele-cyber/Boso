function updateWeather(response){
    let temperatureElement=document.querySelector("#temperature");
    let temperature=response.data.temperature.current;
    let cityElement=document.querySelector("#city");
    cityElement.innerHTML=response.data.city;
    temperatureElement.innerHTML=Math.round(temperature);
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
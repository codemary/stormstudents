import apiKey from "./token.js"

const submitForm = document.querySelector('.city-input');
const inputField = document.querySelector('#your-city');
const popUp = document.querySelector('.popup');
const closeResult = document.querySelector('#close-result');
const cityName = document.querySelector('#city-name-result');
const weatherData = document.querySelectorAll('.weather-data');
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//date stuff
const myDate = new Date();
const dayIndex = myDate.getDay();
const getDate = myDate.getDate();
const getMonth = myDate.getMonth();
const getYear = myDate.getFullYear();

//date function for the forecast
function fullDate(index) {
    fullDate = `${dayNames[dayIndex + index]}, ${getDate + index}.${getMonth}.${getYear}`;
    return fullDate;
}
 
submitForm.addEventListener('submit', (event) => {
    //showing the popup
    event.preventDefault();
    popUp.style.display = "block";

    //setting up the data for the fetch
    const inputValue = inputField.value;
    const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&APPID=${apiKey}`;
    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        //inserting the name of the city
        cityName.textContent = data.city.name;

        
        
        //inserting the weather-data
        weatherData.forEach((element, index) => {

            //get weather icon
            // let weatherIcon = data.list[index].weather[0].icon;
            // let iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
            // const img = document.createElement('img');
            // img.setAttribute("url", weatherIcon);
            // element.children[0].prepend(img); 

            //day of the week, and date
            element.children[0].textContent = `${dayNames[dayIndex + index]}, ${getDate + index}.${getMonth}.${getYear}`;

            //weather description 
            element.children[1].textContent = 'WEATHER: ' + data.list[index].weather[0].description;

            //temperature
            element.children[2].textContent = 'TEMPERATURE: ' + (data.list[index].main.temp - 273.15).toFixed(2) + '°C';

            //humidity
            element.children[3].textContent = 'HUMIDITY: ' + data.list[index].main.humidity + '%';

            //wind speed
            element.children[4].textContent = 'WIND-SPEED: ' + Math.round(data.list[index].wind.speed * 3.6) + 'km/h';
        })
        
    })
    .catch(e => console.log("There is an Error", e))
})

closeResult.addEventListener('click', () => {
    popUp.style.display = "none";
});



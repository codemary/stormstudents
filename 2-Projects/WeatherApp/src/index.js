import apiKey from "./token.js"

console.log("test");
console.log(apiKey);
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=${apiKey}`;
fetch(weatherURL)
 .then(res => res.json())
 .then(data => console.log(data))
 .catch(e => console.log(e))
//  http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22
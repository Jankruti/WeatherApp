const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f72254009cmsh049dac25f985cbep11081cjsnd45773c8b5ac',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather= (city) =>{ 
    cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        
    })
    .catch(err => console.error(err));
}
submit.addEventListener("click", (e)=>{
    getWeather(city.value)
    e.preventDefault()
})
getWeather("Delhi")
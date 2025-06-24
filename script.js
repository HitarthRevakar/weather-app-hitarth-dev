const apiKey = "d4f7ea656860531dd843fdf7ced89ba3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');


async function checkWeather(city){
    const response  = await fetch(apiUrl + city +`&appid=${apiKey}`);
    const data = await response.json();
    console.log(data)

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = 'assets/images/clouds.png';
    }
    else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = 'assets/images/clear.png';
    }
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = 'assets/images/rain.png';
    } 
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = 'assets/images/drizzle.png';
    } 
    else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = 'assets/images/mist.png';
    }


}


searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
})


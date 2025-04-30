const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');


const location_not_found = document.querySelector('.location-not-found');

const Weather_body = document.querySelector('.Weather-body');


async function checkWeather(city){
    const api_key ="............"
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

 
    if(weather_data.cod ==="404"){
        location_not_found.style.display ="flex";
        Weather_body.style.display ="none";

      } else{
        location_not_found.style.display = "none";
        Weather_body.style.display ="flex";
    }
      console.log(weather_data);


    temperature.innerHTML =`${Math.round(weather_data.main.temp-273.15)}°C`;
    description.innerHTML =`${weather_data.weather[0].description}`;

    humidity.innerHTML =`${weather_data.main.humidity}%`;
    wind_speed.innerHTML =`${weather_data.wind.speed}km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src ="file:///F:/weather%20app/assets/Cloud.png.png",width="200",height="200",alt="Weather Image"
            break;
        case 'Clear':
            weather_img.src ="file:///F:/weather%20app/assets/Clear.png.png",width="200",height="200",alt="Weather Image"
            break;
        case 'Rain':
            weather_img.src ="file:///F:/weather%20app/assets/Rain.png.png",width="200",height="200",alt="Weather Image"
            break;
        case 'Mist':
            weather_img.src ="file:///F:/weather%20app/assets/Mist.png.png",width="200",height="200",alt="Weather Image"
            break;
        case 'Snow':
            weather_img.src ="file:///F:/weather%20app/assets/Snow.png.png",width="200",height="200",alt="Weather Image"
            break;
        }
        
        
}
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});

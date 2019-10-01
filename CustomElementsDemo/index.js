
function initialize(){

    weatherForecast.list.forEach(forecast=>{
        addForecastToDom(forecast);
    });
   
}

function fromKelvinToCelsius(degreesFarenheit){
    return degreesFarenheit-273.15;
}

function addForecastToDom(forecast){
     //1. instancier le composant
     var weatherElement = document.createElement('weather-forecast');
     //2. L'initialiser (lui passer des données)
     weatherElement.setAttribute('weather-temperature',fromKelvinToCelsius(forecast.main.temp));
     weatherElement.setAttribute('weather-datetime',new Date(forecast.dt*1000).toLocaleDateString());
     weatherElement.setAttribute('weather-description',forecast.weather[0].description);
     //3. L'attacher au DOM
     var mainDiv = document.querySelector("#weatherForecast");
     mainDiv.appendChild(weatherElement);
}

initialize();
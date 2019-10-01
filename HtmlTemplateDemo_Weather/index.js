
function initialize(){

    weatherForecast.list.forEach(forecast=>{
        addForecastToDom(forecast);
    });
   
}

function fromKelvinToCelsius(degreesFarenheit){
    return degreesFarenheit-273.15;
}

function addForecastToDom(forecast){
     //1. Cloner le template
     var template = document.querySelector('#forecast');
     var clone = document.importNode(template.content, true);
     //2. initialiser le contenu => procéder au "merge" de mail merge
     var dateAndTime = clone.querySelector("#dateAndTime");
     var temperature = clone.querySelector("#temperature");
     var description = clone.querySelector("#description");
     dateAndTime.textContent=new Date(forecast.dt*1000).toDateString();
     temperature.textContent=fromKelvinToCelsius(forecast.main.temp);
     description.textContent=forecast.weather.length>0?forecast.weather[0].description:"aucune donnée disponible";
     //2. L'attacher au DOM
     var mainDiv = document.querySelector("#weatherForecast");
     mainDiv.appendChild(clone);
}

initialize();
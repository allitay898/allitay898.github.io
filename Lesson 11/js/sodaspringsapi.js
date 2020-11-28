const curApi = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=0b655db4a8dd3c42d0038307528bbbb3&units=imperial';
fetch(curApi)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);

    document.getElementById('currentTemp').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed;
    document.getElementById('current').textContent = jsObject.weather[0].description;

  });

  const forApi = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=0b655db4a8dd3c42d0038307528bbbb3&units=imperial';

  fetch(forapi)
.then((response) => response.json())
.then((jsObject) => {
   console.log(jsObject);
     var x = 1;
     var weekDay = new Array(7);
     weekDay[0] = "Sun";
     weekDay[1] = "Mon";
     weekDay[2] = "Tues";
     weekDay[3] = "Wed";
     weekDay[4] = "Thurs";
     weekDay[5] = "Fri";
     weekDay[6] = "Sat";

     for(var i = 0; i < jsObject.list.length; i++){
      var myTime = jsObject.list[i].dt_txt.substring(11);
        var myDate = new Date(jsObject.list[i].dt * 1000);
        var weather = weekDay[myDate.getDay()];
        if(myTime == '18:00:00' && x <= 5 ) {
           document.getElementById('weather' + x).textContent = weather;
           document.getElementById('forecast' + x).textContent = jsObject.list[i].main.temp + '°F';
          
           const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
           const desc = jsObject.list[i].weather[0].description;
           document.getElementById('icon' + x).setAttribute('src', imagesrc);
           document.getElementById('icon' + x).setAttribute('alt', desc);
           x++
        }
    }
  });
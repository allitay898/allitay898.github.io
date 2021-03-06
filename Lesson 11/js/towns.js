let myPath = window.location.pathname;

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL) 
    .then(function (response) {
        return response.json();
    })
    .then(function (jasonObject){

        const towns = jasonObject['towns'];

        for (let i = 0; i < towns.length; i++ ){
            if(towns[i].name == 'Preston' || towns[i].name == 'Soda Springs'|| towns[i].name == 'Fish Haven'){
                if (myPath.includes("index.html")){
                let town_info = document.createElement('info_blocks');
                let name = document.createElement('h2');
                let photo = document.createElement('img');
                let motto = document.createElement('motto');
                let yearFounded = document.createElement('p');
                let currentPopulation = document.createElement('p');
                let averageRainfall = document.createElement('p');

                name.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
                currentPopulation.textContent = 'Current Population: ' + towns[i].currentPopulation;
                averageRainfall.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
                photo.setAttribute('src','images/'+ towns[i].photo);
                photo.setAttribute("height", "205");
                photo.setAttribute('alt', name.textContent + '-' + towns[i].order);

                town_info.appendChild(name);
                town_info.appendChild(motto);
                town_info.appendChild(yearFounded);
                town_info.appendChild(currentPopulation);
                town_info.appendChild(averageRainfall);
                //town_info.appendChild(events);
                town_info.appendChild(photo);

                document.querySelector('div.town_info').appendChild(town_info);
            }

        }
            for (let t = 0; t < towns[i].events.length; t++) {
                if (myPath.includes("preston.html") && towns[i].name == 'Preston') {
                  let event = document.createElement('p');
                  event.textContent = towns[i].events[t];
                  document.querySelector('div.events').appendChild(event);
                }
                if (myPath.includes("fishhaven.html") && towns[i].name == 'Fish Haven') {
                  let event = document.createElement('p');
                  event.textContent = towns[i].events[t];
                  document.querySelector('div.events').appendChild(event);
                }
                if (myPath.includes("sodasprings.html") && towns[i].name == 'Soda Springs') {
                  let event = document.createElement('p');
                  event.textContent = towns[i].events[t];
                  document.querySelector('div.events').appendChild(event);
                }
            }
        }
    })

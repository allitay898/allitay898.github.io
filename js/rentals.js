let myPath = window.location.pathname;

const requestURL = 'https://allitay898.github.io/rentals.json';

fetch(requestURL) 
    .then(function (response) {
        return response.json();
    })
    .then(function (jasonObject){

        const rentals = jasonObject['rentals'];

        for (let i = 0; i < rentals.length; i++ ){
            if(rentals[i].name == 'Honda Metro Scooter' || rentals[i].name == 'Honda Dio Scooter'|| rentals[i].name == 'Honda PCX150 Scooter'|| rentals[i].name == 'Honda Pioneer ATV'|| rentals[i].name == 'Jeep Wrangler - 4 door with a/c'|| rentals[i].name == 'Jeep Wrangler - 2 door'){
                if (myPath.includes("rentals.html")){
                let rental_info = document.createElement('info_blocks');
                let name = document.createElement('h2');
                let photo = document.createElement('img');
                //let motto = document.createElement('motto');
                let yearFounded = document.createElement('p');
                let currentPopulation = document.createElement('p');
                let averageRainfall = document.createElement('p');

                name.textContent = rentals[i].name;
                //motto.textContent = towns[i].motto;
                yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
                currentPopulation.textContent = 'Current Population: ' + towns[i].currentPopulation;
                averageRainfall.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
                photo.setAttribute('src','images/'+ rentals[i].photo);
                photo.setAttribute("height", "205");
                photo.setAttribute('alt', name.textContent + '-' + rentals[i].order);

                town_info.appendChild(name);
                town_info.appendChild(motto);
                town_info.appendChild(yearFounded);
                town_info.appendChild(currentPopulation);
                town_info.appendChild(averageRainfall);
                town_info.appendChild(photo);

                document.querySelector('div.rental_info').appendChild(rental_info);
            }
        }  
        }
    })     

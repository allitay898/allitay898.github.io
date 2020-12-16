let myPath = window.location.pathname;

const requestURL = 'https://allitay898.github.io/rentals.json';

fetch(requestURL) 
    .then(function (response) {
        return response.json();
    })
    .then(function (jasonObject){

        const rentals = jasonObject['rentals'];

        var table = document.getElementbyId('myTable')
    
        for (var i = 0; i < data.length; i++){
            var row = <tr>
                        <td>${data[i].rentaltype}</td>
                        <td>${data[i].maxpersons}</td>
                        <td>${data[i].halfreservation}</td>
                        <td>${data[i].fullreservation}</td>
                        <td>${data[i].halfwalkin}</td>
                        <td>${data[i].fullwalkin}</td>
                    </tr>
        }
    }
    )   

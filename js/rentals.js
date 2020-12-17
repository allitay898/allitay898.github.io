let myPath = window.location.pathname;

const requestURL = 'https://allitay898.github.io/rentals.json';
var rentals = {};
   
fetch(requestURL) 
    .then(function (response) {
        return response.json();
    })
    .then(function (jasonObject){

        rentals = jasonObject['rentals'];
    }
    )

function buildTable(){
    
    var table = document.getElementById("reservationTable");
    var body = document.createElement('tbody');

        


    for (var i = 0; i < rentals.length; i++){

        var row = document.createElement('tr');

        row.innerHTML = 
                    '<td>' + rentals[i].rentaltype + '</td>' +
                    '<td>' + rentals[i].maxpersons + '</td>' +
                    '<td>' + rentals[i].halfreservation + '</td>' +
                    '<td>' + rentals[i].fullreservation + '</td>' +
                    '<td>' + rentals[i].halfwalkin + '</td>' +
                    '<td>' + rentals[i].fullwalkin + '</td>';
        body.appendChild(row);
     
    }
    table.appendChild(body);

}
 

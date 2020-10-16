function getFormattedDate() {
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let theDate = new Date();
    return daysOfWeek[theDate.getDay()] + " " + theDate.getDay() + " " + months[theDate.getMonth()] + " " + theDate.getFullYear(); 
}
document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById("currentDate").innerHTML = getFormattedDate(); 
});
function showBanner(){
    let today = new Date();
    if(today.getDay() == 5){
        document.getElementById("pancakes").style.display ="block";
    }
}
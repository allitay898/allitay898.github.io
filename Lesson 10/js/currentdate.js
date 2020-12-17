function getDate(){
  const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
  var dateElement = document.getElementById('currentdate');
  dateElement.textContent = new Date().toLocaleDateString('en-US', options);
}

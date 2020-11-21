try {
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);
  } catch (e) {
    alert('Error with code or your browser does not support Locale');
  }
  
function showBanner(){
    let today = new Date();
    if(today.getDay() == 5){
        document.getElementById("pancakes").style.display ="block";
    }
}
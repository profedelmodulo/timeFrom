inicioWebOnline = new Date();
setInterval(timeSince, 1000);
document.addEventListener('DOMContentLoaded', init);
function init(){}
function timeSince() {    
    console.log("L6");
    console.log(inicioWebOnline); 
    console.log(Date.now());
    date = ((Date.now()-inicioWebOnline)/1000);
    console.log("Have " + date);
      var seconds = date;    
      var interval = Math.floor(seconds / 31536000);//años
      if (interval > 1) {
        console.log(interval + " years");
        seconds -=interval*31536000;
      }
      interval = Math.floor(seconds / 2592000);//meses
      if (interval > 1) {
        console.log(interval + " months");
        seconds -=interval*2592000;
      }
      interval = Math.floor(seconds / 86400);//dias
      if (interval > 1) {
        console.log(interval + " days");
        seconds -=interval*86400;
      }
      interval = Math.floor(seconds / 3600);//hora
      if (interval > 1) {
        console.log(interval + " hours");
        seconds -=interval*3600;
      }
      interval = Math.floor(seconds / 60);//minutes
      console.log("divido " + seconds + " entre " + "60 y el intervalo es: " + interval);
      if (interval >= 1) {
        console.log(interval + " minutes");
        seconds -= interval*60;
      }
      console.log(Math.floor(seconds) + " seconds");
    }

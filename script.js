/*const days = document.querySelectorAll("days");
const hours = document.querySelectorAll("hours");
const minutes = document.querySelectorAll("minutes");
const seconds = document.querySelectorAll("seconds");*/

const curYear = new Date().getFullYear();

const newYearTime = new Date(`January 1 ${curYear + 1} 00:00:00`);

//updating countdown
function updateCountDownTimer(){
  const curTime = new Date();
  const timeDifference = newYearTime - curTime;

const d = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
const h = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
const m = Math.floor(timeDifference / 1000 / 60) % 60;
const s = Math.floor(timeDifference / 1000) % 60;
  
document.getElementById('days').innerHTML = d;
document.getElementById('hours').innerHTML = h;
document.getElementById('minutes').innerHTML = m;
document.getElementById('seconds').innerHTML = s;
}

setInterval(updateCountDownTimer, 1000);
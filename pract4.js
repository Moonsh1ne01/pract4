const { body } = document;
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

function calculateChristmasCountdown() {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentDay = now.getDate();

  // Figure out the year that the next Christmas will occur on
  let nextChristmasYear = now.getFullYear();
  if (currentMonth === 12 && currentDay > 25) {
    nextChristmasYear += 1;
  }

  const nextChristmasDate = `Dec 25, ${nextChristmasYear} 0:0:0`;
  const christmasDate = new Date(nextChristmasDate);
  const timeLeft = christmasDate - now; // in milliseconds

  let days = 0;
  let hours = 0;
  let mins = 0;
  let secs = 0;

  // Don't calculate the time left if it is Christmas day
  if (currentMonth !== 12 || (currentMonth === 12 && currentDay !== 25)) {
    days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
    hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
    mins = Math.floor(timeLeft / 1000 / 60) % 60;
    secs = Math.floor(timeLeft / 1000) % 60;
  }
  daysEl.innerHTML = days < 10 ? `0${days}` : days;
  hoursEl.innerHTML = hours < 10 ? `0${hours}` : hours;
  minsEl.innerHTML = mins < 10 ? `0${mins}` : mins;
  secsEl.innerHTML = secs < 10 ? `0${secs}` : secs;
}

setInterval(calculateChristmasCountdown, 1000);

function elk(){
  console.log("refd")
  let el=document.querySelector(".el").style.display="none"
  let el2=document.querySelector(".el2").style.display="block"
}
function elk_press(){
  console.log("refd")
  let el3=document.querySelector(".el").style.display="block"
  let el4=document.querySelector(".el2").style.display="none"
}
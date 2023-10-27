let secondsHand = document.querySelector('.hand-sec')
let minsHand = document.querySelector('.hand-min')
let hoursHand = document.querySelector('.hand-hour')

function setDate() {
   let time = new Date();
   let seconds = time.getSeconds();
   let secondsDegrees = ((seconds / 60) * 360) + 90;
   secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

   let mins = time.getMinutes();
   let minsDegrees = ((mins / 60) * 360) + 90;
   minsHand.style.transform = `rotate(${minsDegrees}deg)`;

   let hours = time.getHours();
   let hoursDegrees = ((hours / 60) * 360) + 70;
   hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000)

setDate()

const daysElement = document.querySelector(`[data-days]`);
const hoursElement = document.querySelector(`[data-hours]`);
const minutesElement = document.querySelector(`[data-minutes]`);
const secondsElement = document.querySelector(`[data-seconds]`);

const countDate = new Date(`Jan 01, 2022 00:00:00`).getTime();

function countDown() {
  const now = new Date().getTime();
  const gap = countDate - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  daysElement.innerText = Math.floor(gap / days);
  hoursElement.innerText = Math.floor((gap % days) / hours);
  minutesElement.innerText = Math.floor((gap % hours) / minutes);
  secondsElement.innerText = Math.floor((gap % minutes) / seconds);
}

setInterval(countDown);

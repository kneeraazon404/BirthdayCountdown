const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

function getNextBirthday() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  
  // Get the next birthday based on the current year
  let nextBirthday = new Date(`28 Sep ${currentYear}`);

  // If the current date is after September 28 of the current year, set it to next year
  if (currentDate > nextBirthday) {
    nextBirthday = new Date(`28 Sep ${currentYear + 1}`);
  }

  return nextBirthday;
}

function countdown() {
  const birthDate = getNextBirthday();
  const currentDate = new Date();
  
  const totalSeconds = (birthDate - currentDate) / 1000;
  
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Initial call
countdown();

setInterval(countdown, 1000);

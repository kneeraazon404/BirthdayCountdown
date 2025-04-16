const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

function getNextBirthday() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // Set next birthday, default to this year
  const nextBirthday = new Date(`28 Sep ${currentYear}`);
  // If today is past the birthday, use next year
  if (currentDate > nextBirthday) {
    nextBirthday.setFullYear(currentYear + 1);
  }

  return nextBirthday;
}

function countdown() {
  const birthDate = getNextBirthday();
  const currentDate = new Date();

  const totalSeconds = Math.floor((birthDate - currentDate) / 1000);
  
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const mins = Math.floor((totalSeconds / 60) % 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = days;
  hoursEl.textContent = formatTime(hours);
  minsEl.textContent = formatTime(mins);
  secondsEl.textContent = formatTime(seconds);
}

function formatTime(time) {
  return time.toString().padStart(2, '0');
}

// Start countdown and update every second
countdown();
setInterval(countdown, 1000);

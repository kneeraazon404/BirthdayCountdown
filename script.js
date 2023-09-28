const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const Birthdaty = "28 sep 2024";

function countdown() {
  const BirthdatyDate = new Date(Birthdaty);
  const currentDate = new Date();

  const totalSeconds = (BirthdatyDate - currentDate) / 1000;

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

// initial call
countdown();

setInterval(countdown, 1000);

// const second = 1000,
//   minute = second * 60,
//   hour = minute * 60,
//   day = hour * 24;

// let countDown = new Date("Sep 28, 2020 00:00:00").getTime(),
//   x = setInterval(function () {
//     let now = new Date().getTime(),
//       distance = countDown - now;

//     (document.getElementById("days").innerText = Math.floor(distance / day)),
//     (document.getElementById("hours").innerText = Math.floor(
//       (distance % day) / hour
//     )),
//     (document.getElementById("minutes").innerText = Math.floor(
//       (distance % hour) / minute
//     )),
//     (document.getElementById("seconds").innerText = Math.floor(
//       (distance % minute) / second
//     ));

//     //do something later when date is reached
//     //if (distance < 0) {
//     //  clearInterval(x);
//     //  'IT'S MY BIRTHDAY!;
//     //}
//   }, second);

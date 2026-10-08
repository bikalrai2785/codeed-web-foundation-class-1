// setTimeout(() => {
//
// }, interval)

setTimeout(() => {
  console.log("Hello after 5 seconds");
}, 5000);

// setInternval(function() {

// }, interval)

// let count = 1;
// setInterval(function () {
//   console.log(count);
//   count++;
// }, 1000);

setInterval(() => {
  // Date object
  const now = new Date();
  console.log(now);

  const hours = now.getHours();
  console.log(hours);
  const minutes = now.getMinutes();
  console.log(minutes);
  const seconds = now.getSeconds();
  console.log(seconds);

  const fullYear = now.getFullYear();
  console.log(fullYear);
  const month = now.getMonth();
  console.log(month);
  const day = now.getDay();
  console.log(day);

  const date = now.getDate();
  console.log(date);

  const time = `${hours}:${minutes}:${seconds}`;

  const clock = document.getElementById("clock");

  clock.value = time;

  //   console.log(time);
}, 1000);

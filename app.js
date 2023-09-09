const day = document.getElementById ("day");
const time = document.getElementById("time");

const days = 
[ 
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


function displayTime(){
  let refresh = 1000;
  let mytime = setTimeout('displayCurrentTime()',refresh);
}

function displayCurrentTime() {
  const today = new Date();
  let currentDay = days[today.getDay()];
  day.innerHTML = currentDay;

  const milliTime = Date.now();


time.innerHTML = milliTime;

displayTime();

}
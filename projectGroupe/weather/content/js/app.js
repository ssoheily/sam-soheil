let $ = document;

let inputElem = $.querySelector(".search-box");
let cityElem = $.querySelector(".city");
let dateElem = $.querySelector(".date");
let tempElem = $.querySelector(".temp");
let weatherElem = $.querySelector(".weather");
let hi_lowElem = $.querySelector(".hi-low");
inputElem.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    fetchData();
  }
});
let apiData = {
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
};

function fetchData() {
  let countryValue = inputElem.value;
  fetch(`${apiData.url}${countryValue}&&appid=${apiData.key}`)
    .then((res) => res.json())
    .then((data) => {
      showData(data);
      console.log(data);
    });
}
function showData(data) {
  cityElem.innerHTML = `${data.name}, ${data.sys.country} `;
  dateElem.innerHTML = showDate();
  tempElem.innerHTML = `${Math.floor(data.main.temp - 273.15)}°c `; //kelvin to celcios
  weatherElem.innerHTML = `${data.weather[0].main}`;
  hi_lowElem.innerHTML = `${Math.floor(
    data.main.temp_min - 273.15
  )}°c / ${Math.floor(data.main.temp_max - 273.15)}°c`;
}

function showDate() {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let now = new Date();
  let day = days[now.getDay()];
  let month = months[now.getMonth()];
  let year = now.getFullYear();
  let date = now.getDate();
  return `  ${day} ${date} ${month} ${year} `;
}

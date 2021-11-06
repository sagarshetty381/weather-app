console.log("Client side javascript file is loaded!");

fetch("http://localhost:3000/weather?address=mumbai").then((response) => {
  response.json().then((data) => {
    // console.log(data);
  });
});

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const resultLoc = document.getElementById("location");
const resultForecast = document.getElementById("forecast");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  fetch("http://localhost:3000/weather?address=" + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.location) {
          resultLoc.innerHTML = data.location;
          resultForecast.innerHTML = data.forecast;
        } else {
          resultLoc.innerHTML = data.error;
          resultForecast.innerHTML = "";
        }

        console.log(data);
      });
    }
  );

  console.log(location);
});

const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.weatherapi.com/v1/forecast.json?key=4c7823c6e673425ca40150006210511&q=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        " It is currently " +
          body.current.condition.text +
          " and " +
          body.current.temp_c +
          " degress out. But it feels like " +
          body.current.feelslike_c +
          " degress out."
      );
    }
  });
};

module.exports = forecast;

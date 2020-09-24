const axios = require("axios");

const getWeather = async (location) => {
  const results = await axios({
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/weather",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": process.env.HOST,
      "x-rapidapi-key": process.env.API_KEY,
      useQueryString: true,
    },
    params: {
      mode: "json",
      units: "metric",
      q: location,
    },
  });
  //console.log(results)
  return results.data;
  //return results.data.query.results.channel.item;
};

const getForecast = async (location) => {
  console.log(process.env.API_KEY)
    const results = await axios({
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/forecast",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": process.env.HOST,
      "x-rapidapi-key": process.env.API_KEY,
      useQueryString: true,
    },
    params: {
        mode: "json",
      units: "metric",
      q: location,
    },
  })
  return results.data
};

module.exports = { getForecast, getWeather };

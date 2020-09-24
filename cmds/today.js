const ora = require("ora");
const { getWeather } = require("../utilis/weather");
const geoLocation = require('../utilis/location')
module.exports = async (args) => {
  const spinner = ora().start();
  try {
    const location = args.location || args.l || await geoLocation();
    const weather = await getWeather(location);
    spinner.stop();
    console.log(
      `Current weather conditions in ${location} is ${weather.weather[0].description}`
    );
    console.log(`\t with temparatures ranging upto ${weather.main.temp}°C`);
    console.log(`\t with lowest at ${weather.main.temp_min}°C`);
  } catch (e) {
    spinner.stop();
    console.log(e);
  }
};

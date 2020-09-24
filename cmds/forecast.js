const ora = require('ora')
const { getForecast } = require('../utilis/weather')
const geoLocation = require('../utilis/location')

module.exports = async (args) => {
    const spinner = ora().start()
    try {
        const location  = args.location || args.l || await geoLocation()
        const weather =  await getForecast(location)
        spinner.stop()
        console.log(`------------------------------------Weather Forecast for ${location} for Next 5 days-------------------------------------------------------`)
        weather.list.forEach(item =>
            console.log(`\t --> ${item.dt_txt} || Low: ${item.main.temp_min}°C | High: ${item.main.temp_max}°C | ${item.weather[0].description}`))
        console.log(`-------------------------------------------------------------------------------------------------------------------------`)
    } catch (e) {
        console.log(e)
        spinner.stop()
    }
}
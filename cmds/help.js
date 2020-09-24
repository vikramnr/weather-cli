const menus = {
    main: `
    outside [command] <options>

    today................... show weather for today
    forecast................ show 10-day weather forecast
    version................. show package version
    help.................... show help menu for a command
    `,
    today:`
        outside today <options>
        --location, -l ........ to use location
    `,
    forecast: `
        outside forecast <options>
        --location, -l ......... to use location
    `,

}

module.exports = (args) => {
    const subCmd = args._[0] === 'help' ? args._[1] : args._[0]
    console.log( menus[subCmd] || menus.main)

}
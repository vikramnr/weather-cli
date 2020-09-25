### Weather CLI
This project implements Command Line Tool which gives information about weather patterns by using `OpenWeatherAPI` and [d](https://medium.com/free-code-camp/how-to-create-a-real-world-node-cli-app-with-node-391b727bbed3).

### Commands Supported
    outside [command] <options>

    today................... show weather for today
    forecast................ show 10-day weather forecast
    version................. show package version
    help.................... show help menu for a command
    
    today:
        outside today <options>
        --location, -l ........ to use location
    
    forecast: 
        outside forecast <options>
        --location, -l ......... to use location

### Usage and Installation

- To run the project in local env  
`git clone  https://github.com/vikramnr/weather-cli.git` 

 - In project folder run  `npm install` to install the required dependencies. 

- Once installed run `npm install -g outside-cli` to install the project as node package 

- And at last change the permissions to access the command `outstide` using `chmod`


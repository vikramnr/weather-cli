const { version } = require('../package.json')

module.exports = (args) => {
    console.log(`current version ---> v${version}`)
}
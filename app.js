const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');

console.clear()

//const [, , arg3 = ""] = process.argv
//const [, base = 5] = arg3.split('=')

createFile(argv.base, argv.list, argv.limit)
    .then(fileName => console.log(fileName, "created"))
    .catch(err => console.error(err))
    
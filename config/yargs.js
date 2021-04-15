const argv = 
    require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Is the base of the multiplication table'
        })
        .option('p', {
            alias: 'list',
            type: 'boolean',
            describe: 'Prints the multiplication table in the console'
        })
        .option('l', {
            alias: 'limit',
            type: 'number',
            default: 10,
            describe: 'Is the limit of the multiplication table'
        })
        .check((argv, options) => {
            if(isNaN(argv.b)){
                throw 'Base has to be a number'
            }
            return true;
        })
        .argv;

module.exports = argv;
const fs = require('fs')
const colors = require('colors')

const createFile = async (base = 5, list = false, limit) => {
    try {
        let output = ""

        for(let i=1; i<=limit; i++){
            if(i%2 == 0){
                output += `${base} x ${i} = ${i*base}\n`.blue
            } else {
                output += `${base} x ${i} = ${i*base}\n`.yellow
            }
        }

        const filename = `tabla-${base}.txt`
        fs.writeFileSync(`output/${filename}`, output)

        if(list){
            console.log('=============================='.bgBlue.white)
            console.log(`      TABLA DEL ${base}     `.bgBlue.white)
            console.log("==============================".bgBlue.white)
            console.log(output)
        }

        return filename
    } catch (err) {
        throw err
    }
}

module.exports = {
    createFile
}
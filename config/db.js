const mongoose = require('mongoose')
const colors = require('colors')


const connect_db = async () => {

try {

let a  = await  mongoose.connect(process.env.mogno_url);
console.log(`connected to databse ${process.env.mogno_url}`);

} 
catch (error) {
    console.error(error,colors.bgBlue)
    
}

}
module.exports = connect_db
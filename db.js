const mongoose = require('mongoos')

mongoose.connect(process.env.MONGOURL || "mongodb+srv://admin:1811321@")

const connection = mongoose.connection;
connection.on('connected',() => {
    console.log("DB Connected")
})

connection.on('error', () => console.log("DB Error"))

module.exports = mongoose
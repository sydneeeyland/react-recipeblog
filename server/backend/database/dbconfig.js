const mongoose = require('mongoose');

const connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB database established ${conn.connection.host}`)
    } catch (error) {

    }
}

module.exports = connect
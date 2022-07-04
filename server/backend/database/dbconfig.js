const mongoose = require("mongoose");

const connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(`MongoDB failed to start ${error}`);
  }
};

module.exports = connect;

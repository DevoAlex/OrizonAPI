const mongoose = require("mongoose");

require("dotenv").config();

const connect = async () => {
  try {
    const uri = process.env.DB_URI;
    const connected = await mongoose.connect(
      uri,
      {
        dbName: "orizonAPI",
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log(`mongoDB connected: ${connected.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

const disconnect = async () => {
  try {
    await mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connect, disconnect };

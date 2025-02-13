const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/broadbandconnect', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB connection disconnected.");
});

module.exports = mongoose.connection;
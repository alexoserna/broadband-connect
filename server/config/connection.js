require("dotenv").config({ path: "../../.env" });
console.log("Current Working Directory:", process.cwd());

const mongoose = require('mongoose');
console.log("MONGODB_URI:", process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/broadbandconnect', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Log connection status
mongoose.connection.on("connected", () => {
    console.log("Connecting to MongoDB with URI:", process.env.MONGODB_URI);
    console.log("Successfully connected to MongoDB!");
  });
  
  mongoose.connection.on("error", (err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
  
  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB connection disconnected.");
  });

module.exports = mongoose.connection;
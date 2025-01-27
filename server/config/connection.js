require("dotenv").config({ path: "../../.env" });
console.log("Current Working Directory:", process.cwd());

const mongoose = require('mongoose');
console.log("DATABASE_ENV:", process.env.DATABASE_ENV);

const isLocal = process.env.DATABASE_ENV === "local";
const dbUri = isLocal
  ? process.env.MONGODB_LOCAL_URI || "mongodb://127.0.0.1:27017/broadbandconnect"
  : process.env.MONGODB_URI;

console.log(`Seeding to ${isLocal ? "Local" : "Atlas"} Database...`);
console.log("Connecting to MongoDB with URI:", dbUri);

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Log connection status
mongoose.connection.on("connected", () => {
  console.log(`Successfully connected to ${isLocal ? "Local" : "Atlas"} MongoDB!`);
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB connection disconnected.");
});

module.exports = mongoose.connection;
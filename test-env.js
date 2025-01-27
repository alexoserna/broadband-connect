require("dotenv").config({ path: "./.env" }); // Load .env file
console.log("Current Working Directory:", process.cwd());
console.log("\nMONGODB_URI:", process.env.MONGODB_URI);
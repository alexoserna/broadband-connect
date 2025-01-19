const db = require("../config/connection");
const { Course } = require("../models");

const courseSeeds = require("./courseSeeds.json");

db.once("open", async () => {
    try{
        await Course.deleteMany({});
        await Course.create(courseSeeds);

        console.log("all done!");
        console.log(Course);
        process.exit(0);
    } catch (err) {
        throw err;
    }
});
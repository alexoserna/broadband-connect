const db = require("../config/connection");
const { Course, Certification, Unit } = require("../models");


const certificationSeeds = require('./certificationSeeds.json');
const courseSeeds = require("./courseSeeds.json");
const unitSeeds = require('./unitSeeds.json');

db.once("open", async () => {
    try {
        console.log("Starting database seeding...");

        // Step 1: Seed Units
        console.log("Seeding Units...");
        await Unit.deleteMany({});
        const units = await Unit.insertMany(unitSeeds);
        console.log("Units seeded successfully!");

        // Step 2: Seed Courses
        console.log("Seeding Courses...");
        await Course.deleteMany({});
        const courses = await Course.insertMany(courseSeeds);
        console.log("Courses seeded successfully!");

        // Step 3: Fetch Unit and Course IDs for Certification Linking
        console.log("Linking Certifications...");
        const coreUnits = await Unit.find({ group: "Core" }).select("_id");
        const electiveUnits = await Unit.find({ group: "Group C" }).select("_id");

        const skillTreeCourses = await Course.find({
            slug: { $in: ["open-cabler-registration", "structured-cabling"] } // Update slugs as needed
        }).select("_id");

        // Step 4: Populate Certifications with IDs
        certificationSeeds.forEach((certification) => {
            if (certification.slug === "certification-iii-in-telecommunications-technology") {
                certification.structure.coreUnits = coreUnits.map((unit) => unit._id);
                certification.structure.electiveUnits = electiveUnits.map((unit) => unit._id);
                certification.skillTree = skillTreeCourses.map((course) => course._id);
            }
            if (certification.slug === "ict30419-certification-iii-network-build") {
                certification.structure.coreUnits = coreUnits.map((unit) => unit._id);
                certification.structure.electiveUnits = electiveUnits.map((unit) => unit._id);
            }
        });

        // Step 5: Seed Certifications
        await Certification.deleteMany({});
        await Certification.insertMany(certificationSeeds);
        console.log("Certifications seeded successfully!");

        console.log("Database seeding complete!");
        process.exit(0);
    } catch (err) {
        console.error("Error during database seeding:", err);
        process.exit(1);
    }

});
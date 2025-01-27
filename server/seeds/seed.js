const db = require("../config/connection");
const { Unit, Course, Certification } = require("../models");

const unitSeeds = require("./unitSeeds.json");
const courseSeeds = require("./courseSeeds.json");
const certificationSeeds = require("./certificationSeeds.json");

db.once("open", async () => {
  try {
    console.log("Starting seeding...");

    // Step 1: Seed Units
    console.log("Seeding Units...");
    await Unit.deleteMany({});
    const units = await Unit.insertMany(unitSeeds);
    console.log("Units seeded successfully!");

    // Build Unit Map (unitCode -> ObjectId)
    const unitMap = units.reduce((map, unit) => {
      map[unit.code] = unit._id;
      return map;
    }, {});

    console.log("Unit Map:", unitMap);

    // Step 2: Seed Courses
    console.log("Seeding Courses...");
    await Course.deleteMany({});
    for (const course of courseSeeds) {
      if (course.coreUnits) {
        course.coreUnits = course.coreUnits.map((unitCode) => {
          const unitId = unitMap[unitCode];
          if (!unitId) {
            console.warn(`Unit code ${unitCode} not found for course "${course.title}".`);
          }
          return unitId;
        }).filter(Boolean); // Remove undefined values
      }
      await Course.create(course);
      console.log(`Course "${course.title}" seeded successfully.`);
      console.log(`Course "${course.courseIcon}" seeded successfully.`);
    }

    // Step 3: Seed Certifications
    console.log("Seeding Certifications...");
    await Certification.deleteMany({});
    for (const certification of certificationSeeds) {
      if (certification.structure && certification.structure.coreUnits) {
        certification.structure.coreUnits = certification.structure.coreUnits.map((unitCode) => {
          const unitId = unitMap[unitCode];
          if (!unitId) {
            console.warn(`Unit code ${unitCode} not found for certification "${certification.title}".`);
          }
          return unitId;
        }).filter(Boolean);
      }

      if (certification.structure && certification.structure.electiveUnits) {
        certification.structure.electiveUnits = certification.structure.electiveUnits.map((unitCode) => {
          const unitId = unitMap[unitCode];
          if (!unitId) {
            console.warn(`Elective unit code ${unitCode} not found for certification "${certification.title}".`);
          }
          return unitId;
        }).filter(Boolean);
      }
      await Certification.create(certification);
      console.log(`Certification "${certification.title}" seeded successfully.`);
    }

    console.log("Seeding complete!");
    process.exit(0);
  } catch (err) {
    console.error("Error during seeding:", err);
    process.exit(1);
  }
});

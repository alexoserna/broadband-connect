const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    tagline: { type: String, required: true },
    courseIcon: { type: String, required: true },
    courseDescription: { type: String, required: true },
    courseInformation: { type: String, required: true },
    cost: { type: Number, required: true },
    duration: {
      hours: { type: Number },
      months: { type: Number }
    },
    assessmentMethods: { type: [String], required: true },
    learningOutcomes: { type: [String], required: true },
    prerequisites: { type: [String] },
    focus: { type: String },
    images: { type: [String], default: [] } // Array of image source URLs
});

const Course = model("Course", courseSchema);

module.exports = Course;
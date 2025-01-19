const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
    // Basic Details
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String }, // E.g., "Telecommunications"
    cost: {
        total: { type: Number, required: true }, // Total cost
        perModule: { type: Number }, // Optional breakdown
    },
    duration: {
        months: { type: Number, required: true }, // Course duration in months
        hours: { type: Number }, // Optional: Total hours
    },

    // Qualification Information
    qualificationDescription: { type: String, required: true },
    careerOutcomes: [{ type: String }], // Array of strings for career roles

    // Course Structure
    structure: {
        totalUnits: { type: Number, required: true },
        coreUnits: [
            {
                code: { type: String, required: true },
                title: { type: String, required: true },
            },
        ],
        electiveUnits: [
            {
                code: { type: String, required: true },
                title: { type: String, required: true },
                group: { type: String }, // E.g., "Group C: Telecommunications Cabling"
            },
        ],
    },

    // Learning Outcomes
    learningOutcomes: [{ type: String }],

    // Delivery and Assessment
    deliveryMode: { type: String }, // E.g., "Workplace training"
    assessmentMethods: [{ type: String }], // E.g., "Practical tasks", "Projects"

    // Skill Tree and Modules
    skillTree: [
        {
            skillName: { type: String },
            price: { type: Number },
            description: { type: String },
            outcomes: [
                {
                    code: { type: String },
                    title: { type: String },
                },
            ],
        },
    ],

    // Other Metadata
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Course = model("Course", courseSchema);

module.exports = Course;
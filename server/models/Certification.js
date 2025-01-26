const {Schema, model} = require("mongoose");

const certificationSchema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    tagline: { type: String, required: true },
    courseIcon: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    cost: { type: Number, required: true },
    duration: {
      months: { type: Number }
    },
    deliveryMode: { type: String, required: true }, // e.g., "hands-on"
    assessmentMethods: { type: [String], default: []},
    learningOutcomes: { type: [String], required: true },
    careerOutcomes: { type: [String], required: true },
    structure: {
      totalUnits: { type: Number, required: true },
      coreUnits: [{ type: Schema.Types.ObjectId, ref: 'Unit' }],
      electiveUnits: [{ type: Schema.Types.ObjectId, ref: 'Unit' }]
    },
    skillTree: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    images: { type: [String], default: [] } // Array of image source URLs
});

const Certification = model("Certification", certificationSchema);

module.exports = Certification;
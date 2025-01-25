const { Schema, model } = require("mongoose");

const unitSchema = new Schema({
    code: { type: String, required: true },
    title: { type: String, required: true },
    group: { type: String, required: true } // e.g., "Group C"
});

const Unit = model("Unit", unitSchema);

module.exports = Unit;
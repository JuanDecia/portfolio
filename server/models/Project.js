import mongoose from "mongoose";

// Project Schema
const projectSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, requided: true },
    details: { type: String },
    technologies: { type: [String] },
    image: { type: String },
    demo: { type: String },
    repo: { type: String, required: true},
});

// Project Models
const Project = mongoose.model('Project', projectSchema);

export default Project;
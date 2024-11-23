import express from 'express';  // Usamos import en lugar de require
import Project from '../models/Project.js';  // Asegúrate de que la extensión .js esté incluida

const router = express.Router();

// Get project by id
router.get('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }
        res.json(project);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el proyecto' });
    }
});

// Endpoint for all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint for add project
router.post('/', async (req, res) => {
    try {
        const newProject = new Project(req.body);
        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;  // Usamos export default en lugar de module.exports

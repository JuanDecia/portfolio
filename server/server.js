import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';  // Importa la función de conexión
import projectRoutes from './routes/projects.js';  // Importar las rutas

dotenv.config();  // Cargar las variables de entorno

// Inicializa la aplicación Express
const app = express();
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
connectDB();

// Configurar las rutas de la API
app.use('/api/projects', projectRoutes);

// Configurar el puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

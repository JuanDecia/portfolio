// projectApi.js
import axios from 'axios';

const getProjects = async () => {
    try {
        const response = await axios.get('/api/projects'); // Asegúrate de que esta URL sea correcta
        return response.data;  // Si la API devuelve un objeto con 'data'
    } catch (error) {
        console.error('Error fetching projects:', error);
        return []; // Retorna un array vacío si ocurre un error
    }
};

export default getProjects;

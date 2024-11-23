import axios from "axios";

const API_URL = 'http://localhost:5000/api/projects';

export const getProjects = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching projects: ', error);
        return [];
    }
};

export const getProjectById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data
    } catch (error) {
        console.error('Error fetching project by id:', error);        
        return null;
    }
};
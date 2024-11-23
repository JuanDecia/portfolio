import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Projects = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect( () => {
    // Funcion for get project width its specific ID
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/projects/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error("Error al obtener el proyecto:", error);        
      }
    };

    fetchProject();
  }, [id]);

  if (!project) {
    return <p>Proyecto no encontrado.</p>;
  }

  return (
    <ProjectDetailsContainer>
      <ProjectImage src={project.image} alt={project.name} />
      <ProjectTitle>{project.name}</ProjectTitle>
      <ProjectDescription>{project.details}</ProjectDescription>
      <ProjectTechnologies>
      <h3>Tecnologías usadas:</h3>
      <ul>
        {project.technologies.map( (tech, index) => (
          <li key={index}>{tech}</li> 
        ))}
      </ul>
      </ProjectTechnologies>
      <Links>
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          Ver Demo
        </a>
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          Ver Repositorio
        </a>
      </Links>
    </ProjectDetailsContainer>
  );
};

const ProjectDetailsContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1.5rem;
`;

const ProjectTitle = styled.h1`
  margin: 1rem 0;
  color: #333;
`;

const ProjectDescription = styled.p`
  color: #555;
  line-height: 1.6;
`;

const ProjectTechnologies = styled.ul`
  list-style: none;
  padding: 0;

  li {
    background: #eaf5fc;
    display: inline-block;
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    color: #007bce;
  }
`;

const Links = styled.div`
  margin-top: 1.5rem;

  a {
    display: inline-block;
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    background: #61dafb;
    color: white;
    border-radius: 5px;
    text-decoration: none;

    &:hover {
      background: #21a1f1;
    }
  }
`;

export default Projects;

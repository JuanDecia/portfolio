import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Components and files import
import getProjects from '../services/projectApi';
import Hero from '../components/Hero';

const Home = () => {

    // State for storing projects
    const [projectsData, setProjects] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        // Call API to get projects
        const fetchProjects = async () => {
            const projectsData = await getProjects();
            console.log(projectsData);
            setProjects(projectsData);
        }
        fetchProjects();
    }, []);

    const handleViewMore = (id) => {
        navigate(`/projects/${id}`);
    };

    return (
        <HomeContainer>
            <Hero />

            <CardContainer>
  {projectsData.length > 0 ? (
    projectsData.map((project) => (
      <Card key={project._id}>
        <CardImage src={project.image} alt={project.name} />
        <CardContent>
          <CardTitle>{project.name}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
          <ViewButton onClick={() => handleViewMore(project._id)}>
            Ver más
          </ViewButton>
        </CardContent>
      </Card>
    ))
  ) : (
    <p>No hay proyectos disponibles.</p>
  )}
</CardContainer>
        </HomeContainer>
    )
};

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    padding: 2rem;
`;

const Card = styled.div`
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-align: center;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }
`;

const CardImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const CardContent = styled.div`
    padding: 1rem;
`;

const CardTitle = styled.div`
    margin: 0.5rem 0;
    color: #333;
`;

const CardDescription = styled.p`
    color: #666;
    font-size: 0.9rem;
`;

const ViewButton = styled.button`
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #61dafb;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

  &:hover {
    background-color: #21a1f1;
  }
`;

export default Home;
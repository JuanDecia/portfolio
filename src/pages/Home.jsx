import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Components and files import
import Hero from '../components/Hero';
import projectsData from "../data/projectsData";

const Home = () => {

    const navigate = useNavigate();

    const handleViewMore = (id) => {
        navigate(`/projects/${id}`)
    };


    return (
        <HomeContainer>
            <Hero />

            <CardContainer>
                {projectsData.map((project) => (
                    <Card key={project.id}>
                        <CardImage src={project.image} alt={project.name} />
                        <CardContent>
                            <CardTitle>{project.name}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                            <ViewButton onClick={() => handleViewMore(project.id)}>
                                Ver más
                            </ViewButton>
                        </CardContent>
                    </Card>
                ))}
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
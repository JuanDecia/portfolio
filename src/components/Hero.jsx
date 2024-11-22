import React from "react";
import styled from "styled-components";

const Hero = () => {
    return (
        <HeroContainer>

            {/* IMG */}
            <HeroImage>
                <img src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </HeroImage>

            {/* Content */}
            <HeroContent>
                <HeroTitle>Hola soy Juan!</HeroTitle>
                <HeroDescription>
                    Soy un desarrollador web con experiencia en React, Node.js y
                    tecnologías modernas. Me apasiona crear soluciones eficientes y
                    atractivas que resuelvan problemas del mundo real.
                </HeroDescription>
                <HeroButtonContainer>
                    <HeroButton herf='#proyects'>Proyectos</HeroButton>
                    <HeroButton href="#contact">Contáctame</HeroButton>
                </HeroButtonContainer>
            </HeroContent>
        </HeroContainer>
    );
};

// Main Container
const HeroContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    padding: 2rem;
    background-color: #f4f4f4;
    min-height: 100vh;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

// Content Container
const HeroContent = styled.div`
    flex: 1;
    max-width: 600px;
    margin: 1rem;
    text-align: left;
`;

// Image Container
const HeroImage = styled.div`
    flex: 1;
    max-width: 400px;
    margin: 1rem;
    text-align: center;

    img {
        width: 100%;
        border-radius: 50%;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
`;

// Title Container
const HeroTitle = styled.h1`
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
`;

// Description Container
const HeroDescription = styled.div`
    font-size: 1.2rem;
    line-height: 1.6;
    color: #555;
`;

// Buttons Container
const HeroButtonContainer = styled.div`
    display: flex;
    gap: 30px;
`;

// Buttons
const HeroButton = styled.a`
    display: inline-block;
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background-color: #61dafb;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;

    &:hover {
        background-color: #21a1f1;
    }
`;

export default Hero;
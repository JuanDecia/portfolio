import React from "react";
import styled from "styled-components";
import Hero from '../components/Hero';

const Home = () => {
    return (
        <HomeContainer>
            <Hero />
        </HomeContainer>
    )
};

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export default Home;
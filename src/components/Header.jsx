import styled from "styled-components";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <h1 className="header-title">Mi Portfolio</h1>
                <Navbar />
            </HeaderContent>
        </HeaderContainer>
    );
};

// Styles for main content from Header
const HeaderContainer = styled.header`
    background-color: #282c34;
    padding: 1rem 0;
    color: #fff;
`;

// Styles to Header content
const HeaderContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
`;

export default Header;
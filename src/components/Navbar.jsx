import { Link } from 'react-router-dom';
import styled from "styled-components";

const Navbar = () => {
    return (
        <Nav>
            <NavList>
                <li>
                    <NavLink to='/'>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/projects'>Proyectos</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>Acerca de Mi</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contacto</NavLink>
                </li>
            </NavList>
        </Nav>
    )
}

// Nav container
const Nav = styled.nav`
    display: flex;
`;

// Link List Styles
const NavList = styled.ul`
    list-style: none;
    display: flex;
    gap: 1.5rem;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    transition: color 0.3s;

    &:hover {
        color: #61dafb;
    }
`;

export default Navbar;
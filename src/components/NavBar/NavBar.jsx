import { Navbar, Nav, Container, } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-secondary" : ""}>Inicio</NavLink>
                        <NavLink to= "/categoria/crema">Cremas</NavLink>
                        <NavLink to="/categoria/belleza">Belleza</NavLink>
                        <Link to="/CartWidget">
                            <CartWidget />
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
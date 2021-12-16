import { Container, FormControl, Navbar, NavDropdown, Form, Nav, Button, } from "react-bootstrap";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";


export default function NavBar() {

    const navigate = useNavigate();

    let goToSignUp = () => {
        navigate("/signup");
      };

      let goToLogin = () => {
        navigate("/login");
    };

    return (
        <Navbar text="white" expand="lg" className="navbar">
            <Container fluid>
                <Navbar.Brand className="mx-5 text-white fw-bold" href="#">Hotel Management App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '110px' }}
                        navbarScroll
                    >

                        <NavLink className="mx-5 text-white fw-bold" to="/">Home</NavLink>
                        <NavLink className="mx-5 text-white" to="/about">About</NavLink>
                        <NavLink className="mx-5 text-white" to="/contact">Contact</NavLink>
                        <NavLink className="mx-5 text-white" to="/room">Rooms</NavLink>

                    </Nav>


                    <Button className="btn mx-4" onClick={goToLogin}>Login</Button>
                    <Button className="btn me-5" onClick={goToSignUp}>Sign Up</Button>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
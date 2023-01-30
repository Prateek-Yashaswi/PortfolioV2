import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../navbar/CustomNavbar.css";

function CustomNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Prateek.Init</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="a" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="a" href="#moreInformation">
              More Information
            </Nav.Link>
            <Nav.Link className="a" href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link className="a" href="#experience">
              Experience
            </Nav.Link>
            <Nav.Link className="a" href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link className="a" href="#reachOut">
              Reach out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;

/* import './styles/Navbar.css'

function Navbar() {
  return (
    <div className="bg-amber-600" id='navbar'></div>
  )
}

export default Navbar */
import './styles/Navbar.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg" id='navbar'>
      <Container fluid>
        <Navbar.Brand href="#">{/* Pasteleria */}
          <img src="src/assets/PasteleriaLogo.png" alt="" srcset="" id='pasteleriaLogo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Nosotros</Nav.Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Galletas</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Panes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Pasteles
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
              Palitos de queso
              </NavDropdown.Item>

      {/*         <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>
   {/*          <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscador"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
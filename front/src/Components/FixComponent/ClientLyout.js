import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect,useState } from 'react';
import { Outlet } from 'react-router-dom';
function ClientLayout() {
     

  return (
    <>

      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/Client/Books">Home</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/Client/Catigories">Catigories</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  );
}

export default ClientLayout;

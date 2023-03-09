import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import req from '../../Services/BookServices';
import { useEffect,useState } from 'react';
import { Outlet } from 'react-router-dom';
function AdminLayout() {
     
  let [Book,setBook]=useState([])
  useEffect(()=>{
    getBook()
  },[])
  async function getBook()
  {
    let result = await  req.getAll()
    console.log(result)
    setBook(result.data)
  }
  return (
    <>

      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/Admin/Books">Home</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/Admin/Catigories">Catigories</Nav.Link>
          <Nav.Link href="/Admin/AddBook">AddBook</Nav.Link>
          <Nav.Link href="/Admin/AddCategorie">AddCategorie</Nav.Link>
          <Nav.Link href="/Admin/Users">Users</Nav.Link>
          <Nav.Link href="/Admin/AddUser">AddUser</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br></br>
      <Outlet/>
    </>
  );
}

export default AdminLayout;

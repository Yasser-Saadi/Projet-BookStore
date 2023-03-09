
import Button from 'react-bootstrap/esm/Button';
import req from '../../Services/BookServices';
import req2 from '../../Services/CatigorieServices';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../Css/BooksComponentCss.css'



function ClientBooks () {
   
        let [Book,setBook]=useState([])
        
        const[category,Setcategory]=useState([])
        useEffect(()=>{
          getBook()
          getCatigories()
        },[])
      
        async function getCatigories()
        {
          const tmp=await req2.getAll()
          console.log(tmp.data)
          Setcategory(tmp.data)
         
        }
      
        async function getBook()
        {
          let result = await  req.getAll()
          //console.log(result)
          setBook(result.data)
        }

        async function DeleteBook(id)
        {
          await  req.Deleteone(id)
          getBook()
        }

    
    return (
      
      category.map((cat,ind)=>{
      if(Book.find(b=>b.Catigorie.nom==cat.nom)){
        return(
          <>
          <h2>{cat.nom}</h2>
  <div className='listbooks' key={cat._id} >
        <ul>
          
      {Book.map((book,Index)=>{
     if(book.Catigorie.nom==cat.nom && book!=null)
      {    
         return( 
           <li>
           
            <Card style={{ width: '18rem' }} key={book._id}>
      <Card.Body>
        <Card.Title>{book.nom}</Card.Title>
        <Card.Text>
        {book.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{book.isbn}</ListGroup.Item>
        <ListGroup.Item>{book.auteur}</ListGroup.Item>
        <ListGroup.Item>{book.editeur}</ListGroup.Item>
        <ListGroup.Item>{book.date_edition}</ListGroup.Item>
        <ListGroup.Item>{book.Catigorie.nom}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="primary" href={`/Client/DetailsBooks/${book._id}`} >Detail</Button>
      </Card.Body>
           </Card>
            </li>
       ) }
          }
         
       )}
        </ul>
          </div>
   
          </>
        )}
  })
    

      
      
       
    )
  }

  export default ClientBooks;
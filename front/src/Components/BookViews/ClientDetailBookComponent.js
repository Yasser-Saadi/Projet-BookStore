
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import req from '../../Services/BookServices';
import req2 from '../../Services/CatigorieServices';
import '../Css/DetailsBooksComponent.css'
export default function ClientDetailBook() {
    const[nom,SetNom]=useState("")
    const[description,Setdescription]=useState("")
    const[isbn,Setisbn]=useState("")
    const[auteur,Setauteur]=useState("")
    const[editeur,Setediteur]=useState("")
    const[date_edition,Setdate_edition]=useState("")
    const[img,Setimg]=useState("")
    const[category,Setcategory]=useState([])
    const navigate=useNavigate()
    const {id}=useParams()
  
    useEffect(()=>{
        Bookbyid()
    },[])

  
    async function Bookbyid(){
        const p=await req.getone(id)
        console.log(p)
        SetNom(p.data.nom)
        Setdescription(p.data.description)
        Setisbn(p.data.isbn)
        Setauteur(p.data.auteur)
        Setediteur(p.data.editeur)
        Setdate_edition(p.data.date_edition)
        Setcategory(p.data.Catigorie)
    }
    async function DeleteBook(id)
    {
      await  req.Deleteone(id)
      navigate('/')
    }
    
    return (<div>
      <Card style={{ width: '18rem' }} className='container'>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{isbn}</ListGroup.Item>
        <ListGroup.Item>{auteur}</ListGroup.Item>
        <ListGroup.Item>{editeur}</ListGroup.Item>
        <ListGroup.Item>{date_edition}</ListGroup.Item>
        <ListGroup.Item>{category.nom}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="danger" onClick={()=>DeleteBook(id)}>Delete</Button>
         <Button variant="success" href={`/Client/EditBook/${id}`} >Modifier</Button>
      </Card.Body>
    </Card>
    </div>
 
    )
}


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import req from '../../Services/BookServices';
import req2 from '../../Services/CatigorieServices';

export default function EditBook() {
    const[nom,SetNom]=useState("")
    const[description,Setdescription]=useState("")
    const[isbn,Setisbn]=useState("")
    const[auteur,Setauteur]=useState("")
    const[editeur,Setediteur]=useState("")
    const[img,Setimg]=useState("")
    const[category,Setcategory]=useState([])
    const[selectcat,SetSelectcat]=useState(0)
    const[date_edition,Setdate_edition]=useState("")
    const [cate,SetCategore]=useState("")
    const navigate=useNavigate()
    const {id}=useParams()
  
    useEffect(()=>{
        Bookbyid()
        getCatigories()
    },[])

    async function  getCatigories()
    {
      const p=await req2.getAll()
      console.log(p)
      Setcategory(p.data)
    }
  
    async function Bookbyid(){
        const p=await req.getone(id)
        console.log(p)
        
        SetNom(p.data.nom)
        Setdescription(p.data.description)
        Setisbn(p.data.isbn)
        Setauteur(p.data.auteur)
        Setediteur(p.data.editeur)
        SetCategore(p.data.Catigorie.nom)
        Setdate_edition(p.data.date_edition)
    }
    async function SubmitBook(e)
    {e.preventDefault()
      try{
        
        const p={
          "_id":id,
          "nom":nom,
          "description":description,
          "isbn":isbn,
          "auteur":auteur,
          "editeur":editeur,
          'date_edition':date_edition,
          "Catigorie":category[selectcat]
        }
      await req.Updateone(p)
      navigate("/")
      }catch(e)
      {
         console.log(e)
      }
    
    }
    return (
      <Form onSubmit={SubmitBook}>
        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Categorie name" value={nom}  onChange={(e)=>SetNom(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>description</Form.Label>
          <Form.Control type="text" placeholder="Enter Categorie description" value={description}  onChange={(e)=>Setdescription(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>isbn</Form.Label>
          <Form.Control type="text" placeholder="Enter Categorie isbn" value={isbn}  onChange={(e)=>Setisbn(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>auteur</Form.Label>
          <Form.Control type="text" placeholder="Enter Categorie auteur" value={auteur}  onChange={(e)=>Setauteur(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>editeur</Form.Label>
          <Form.Control type="text" placeholder="Enter Categorie editeur" value={editeur}  onChange={(e)=>Setediteur(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Date edition</Form.Label>
          <Form.Control type="Date" placeholder="Enter Book date edition" value={date_edition}  onChange={(e)=>Setdate_edition(e.target.value)} />
        </Form.Group>
        <Form.Label>Categorie</Form.Label>
      <Form.Select  onChange={(e)=>SetSelectcat(e.target.value)}>
      <option key={cate} value={cate} selected>{cate}</option>
      {category.map((cat,Index)=>{
        return(
        <option key={Index} value={Index}>{cat.nom}</option>
        )
      })}

      </Form.Select>
        <br/>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
}

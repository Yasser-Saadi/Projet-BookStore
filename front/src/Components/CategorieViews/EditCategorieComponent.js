
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import req2 from '../../Services/CatigorieServices';

export default function EditCategorie() {
    const[nom,SetNom]=useState("")
    const navigate=useNavigate()
    const {id}=useParams()
  
    useEffect(()=>{
        Categoriebyid()
    },[])

  
  
    async function Categoriebyid(){
        const p=await req2.getone(id)
        console.log(p)
        SetNom(p.data.nom)
    }
    async function SubmitCategorie(e)
    {e.preventDefault()
      try{
        
        const p={
          "_id":id,
          "nom":nom,
        }
      await req2.Updateone(p)
      navigate("/")
      }catch(e)
      {
         console.log(e)
      }
    
    }
    return (
      <Form onSubmit={SubmitCategorie}>
        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Categorie name" value={nom}  onChange={(e)=>SetNom(e.target.value)} />
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
}

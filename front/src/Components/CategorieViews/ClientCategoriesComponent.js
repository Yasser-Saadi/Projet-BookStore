
import Button from 'react-bootstrap/esm/Button';
import req from '../../Services/BookServices';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../Css/BookCategoriesComponent.css'
import req2 from '../../Services/CatigorieServices';



export default function ClientCategories () {
   
        let [Catigories,setCategories]=useState([])
        useEffect(()=>{
          getCatigories()
        },[])
        async function getCatigories()
        {
          let result = await  req2.getAll()
          console.log(result)
          setCategories(result.data)
        }

        async function DeleteCatigories(id)
        {
          await  req2.Deleteone(id)
          getCatigories()
        }

    
    return (
      <div className='listbook' >
     
        <ul>
      {Catigories.map((cat,Index)=>{
         return( <li>
           
            <Card style={{ width: '18rem' }} key={cat._id}>
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>{cat.nom}</Card.Title>
      </Card.Body>
      <Card.Body>
        <Button variant="primary" href={`/Client/CategorieBook/${cat._id}`} >Details</Button>
      </Card.Body>
    </Card>
            </li>)   
            
       })}
       </ul>
       </div>
       
    )
  }


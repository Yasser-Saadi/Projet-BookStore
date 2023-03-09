

import req from '../../Services/BookServices';
import { useEffect,useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';



function ScrollBooks () {
   
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

        async function DeleteBook(id)
        {
          await  req.Deleteone(id)
          getBook()
        }

    
    return (
        <Carousel className='scroll'>
     { Book.map((book,Index)=>{
         return( <>
           
      <Carousel.Item key={Index}>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{book.nom}</h3>
          <p>{book.auteur}</p>
        </Carousel.Caption>
      </Carousel.Item></>)   
            
       })}
       </Carousel>
      
    )
  }

  export default ScrollBooks;
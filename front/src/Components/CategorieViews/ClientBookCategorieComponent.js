import Button from "react-bootstrap/esm/Button";
import req from "../../Services/BookServices";
import req2 from "../../Services/CatigorieServices";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../Css/BooksComponentCss.css";

function ClientCatBook() {
    let [Book, setBook] = useState([]);
    let [tms, SetTms] = useState([]);
    const {id} = useParams();

    const [category, Setcategory] = useState([]);
    useEffect(() => {
        getBook();
        getCatigories();
    }, []);

    async function getCatigories() {
        const p = await req2.getone(id);
        console.log(p);
        SetTms(p.data);
    }

    async function getBook() {
        let result = await req.getAll();
        console.log(result);
        setBook(result.data);
    }

    async function DeleteBook(id) {
        await req.Deleteone(id);
        getBook();
    }

    return (
        <>
            <h2>{tms.nom}</h2>
            <div className="listbook">
                <ul>
                    {Book.map((book, Index) => {
                        if (book.Catigorie.nom == tms.nom) {
                            return (
                                <li>
                                    <Card style={{ width: "18rem" }} key={book._id}>
                                        <Card.Body>
                                            <Card.Title>{book.nom}</Card.Title>
                                            <Card.Text>{book.description}</Card.Text>
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
                            );
                        }
                    })}
                </ul>
            </div>
        </>
    );
}

export default ClientCatBook;

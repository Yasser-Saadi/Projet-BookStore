import { useEffect, useState } from "react";
import "../Css/BookCategoriesComponent.css";
import req3 from "../../Services/UserServices";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Users() {
  let [Users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  async function getUsers() {
    let result = await req3.getAll();
    console.log(result);
    setUsers(result.data);
  }

  async function DeleteUsers(id) {
    await req3.Deleteone(id);
    getUsers();
  }

  return (
    <div className="listbook">
      <ul>
        {Users.map((User, Index) => {
          return (
            <li>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <center>{User.FName}</center>
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    <center>{User.LName}</center>
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    <center>{User.Email}</center>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    style={{ color: "red" }}
                    size="small"
                    variant="danger"
                    onClick={() => DeleteUsers(User._id)}
                  >
                    Delete
                  </Button>
                  <Button
                    style={{ color: "orange" }}
                    size="small"
                    variant="success"
                    href={`/Admin/EditUser/${User._id}`}
                  >
                    Modifier
                  </Button>
                </CardActions>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
}


  


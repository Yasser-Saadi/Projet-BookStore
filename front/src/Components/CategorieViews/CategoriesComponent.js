import { useEffect, useState } from "react";
import "../Css/BookCategoriesComponent.css";
import req2 from "../../Services/CatigorieServices";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Categories() {
  let [Catigories, setCategories] = useState([]);
  useEffect(() => {
    getCatigories();
  }, []);
  async function getCatigories() {
    let result = await req2.getAll();
    console.log(result);
    setCategories(result.data);
  }

  async function DeleteCatigories(id) {
    await req2.Deleteone(id);
    getCatigories();
  }

  return (
    <div className="listbook">
      <ul>
        {Catigories.map((cat, Index) => {
          if (Index %  4 == 0 && Index != 0) {
          }
          return (
            <li>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image="https://pngimg.com/uploads/hitler/hitler_PNG9.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <center>{cat.nom}</center>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    style={{ color: "red" }}
                    size="small"
                    variant="danger"
                    onClick={() => DeleteCatigories(cat._id)}
                  >
                    Delete
                  </Button>
                  <Button
                    style={{ color: "orange" }}
                    size="small"
                    variant="success"
                    href={`/Admin/EditCatigories/${cat._id}`}
                  >
                    Modifier
                  </Button>
                  <Button
                    style={{ color: "blue" }}
                    size="small"
                    variant="primary"
                    href={`/Admin/CategorieBook/${cat._id}`}
                  >
                    Details
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

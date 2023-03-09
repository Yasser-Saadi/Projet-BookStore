import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import req from "../../Services/BookServices";
import req2 from "../../Services/CatigorieServices";

import { TextField , Box, Button, Grid, MenuItem } from "@mui/material";

export default function AddBook() {
  const [nom, SetNom] = useState("");
  const [description, Setdescription] = useState("");
  const [isbn, Setisbn] = useState("");
  const [auteur, Setauteur] = useState("");
  const [editeur, Setediteur] = useState("");
  const [date_edition, Setdate_edition] = useState("");
  const [img, Setimg] = useState("");
  const [category, Setcategory] = useState([]);
  const [selectcat, SetSelectcat] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getCatigories();
  }, []);

  async function getCatigories() {
    const tmp = await req2.getAll();
    Setcategory(tmp.data);
  }

  async function SubmitBook(e) {
    e.preventDefault();
    try {
      const p = {
        nom: nom,
        description: description,
        isbn: isbn,
        auteur: auteur,
        editeur: editeur,
        date_edition: date_edition,
        image : img,
        Catigorie: category[selectcat]
      };
      console.log(p);
      await req.Addone(p);
      navigate("/Admin/Books");
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Box
      sx={{
        ml: "20px",
        mr: "20px",
        border: "1px solid",
        borderColor:"grey.500",
        my: 4,
        width: "100%",
        overflow: "hidden",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Grid container spacing={2} sx={{ px: 3 }}>
        <Grid item md={6} sm={12}>
          <TextField
            id="standard-required"
            label="Nom du Livre"
            variant="standard"
            required
            fullWidth
            value={nom}
            onChange={(e) => SetNom(e.target.value)}
          />
        </Grid>

        <Grid item md={6} sm={12}>
          <TextField
            id="standard-required"
            label="description"
            variant="standard"
            required
            fullWidth
            value={description}
            onChange={(e) => Setdescription(e.target.value)}
          />
        </Grid>

        <Grid item md={6} sm={12}>
          <TextField
            id="standard-required"
            label="isbn du Livre"
            variant="standard"
            required
            fullWidth
            value={isbn}
            onChange={(e) => Setisbn(e.target.value)}
          />
        </Grid>

        <Grid item md={6} sm={12}>
          <TextField
            id="standard-required"
            label="L'auteur du Livre"
            variant="standard"
            required
            fullWidth
            value={auteur}
            onChange={(e) => Setauteur(e.target.value)}
          />
        </Grid>

        <Grid item md={6} sm={12}>
          <TextField
            id="standard-required"
            label="L'editeur du Livre"
            variant="standard"
            required
            fullWidth
            value={editeur}
            onChange={(e) => Setediteur(e.target.value)}
          />
        </Grid>

        <Grid item md={6} sm={12}>
          <TextField  
            id="standard-required"
            variant="standard"
            type="Date"
            helperText="Date d'edition"
            required
            fullWidth
            value={date_edition}
            onChange={(e) => Setdate_edition(e.target.value)}
          />
        </Grid>

        <Grid item md={6} sm={12}>
          <TextField  
            id="standard-required"
            label="l'image du Livre"
            variant="standard"
            required
            fullWidth
            value={img}
            onChange={(e) => Setimg(e.target.value)}
          />
        </Grid>

        <Grid item md={6} sm={12}>
          <TextField
            id="standard-required"
            select
            label="La categorie du Livre"
            value={selectcat}
            onChange={(e) => SetSelectcat(e.target.value)}
            helperText="Choisissez la categorie du Livre"
            variant="standard"
            required
            fullWidth
          >
            {category.map((category, index) => (
              <MenuItem key={index} value={category._id}>
                {category.nom}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <br />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          sx={{ mx: 5 }}
          onClick={SubmitBook}
        >
          Ajouter
        </Button>
        
      </Box>
      <br />
    </Box>
  );
}

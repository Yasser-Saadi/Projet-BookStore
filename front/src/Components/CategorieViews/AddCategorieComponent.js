import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import req2 from "../../Services/CatigorieServices";
import { TextField, Box, Button, Grid } from "@mui/material";

export default function AddCategorie() {
  const [nom, SetNom] = useState("");
  const navigate = useNavigate();

  async function SubmitCategorie(e) {
    e.preventDefault();
    try {
      const p = {
        nom: nom,
      };
      console.log(p);
      await req2.Addone(p);
      navigate("/Admin/Catigories");
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Box
      sx={{
        boxShadow: 8,
        mx: "20px",
        marginLeft: "600px",
        border: "1px solid",
        borderColor: "grey.500",
        my: 10,
        width: "20%",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Grid container spacing={2} sx={{ px: 3 }}>
        <Grid item md={6} sm={12}>
          <TextField
            id="standardNom-required"
            label="Nom"
            variant="standard"
            required
            fullWidth
            value={nom}
            onChange={(e) => SetNom(e.target.value)}
          />
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
          sx={{ mx: 10 }}
          onClick={SubmitCategorie}
        >
          Ajouter la categorie
        </Button>
      </Box>
      <br />
    </Box>
  );
}

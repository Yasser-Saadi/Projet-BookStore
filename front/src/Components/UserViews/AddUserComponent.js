import React from 'react'

import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import req3 from '../../Services/UserServices';
import { TextField , Box, Button, Grid, MenuItem } from "@mui/material";

export default function AddUser() {
    const[FName,SetFname]=useState("")
    const[LName,SetLname]=useState("")
    const[Email,SetEmail]=useState("")
    const[Password,SetPssword]=useState("")
    const navigate=useNavigate()
   
    async function SubmitUser(e)
    {e.preventDefault()
      try{
        
        const p={
          "FName":FName,
          "LName":LName,
          "Email":Email,
          "password":Password,
        }
        console.log(p)
      await req3.Addone(p)
      navigate("/Admin/Users")
      }catch(e)
      {
         console.log(e)
      }
    
    }
    return (
      <Box
      sx={{
        boxShadow: 8,
        mx: "20px",
        marginLeft:"430px",
        border: "1px solid",
        borderColor:"grey.500",
        my: 20,
        width: "50%",
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
            id="standard-required"
            label="Nom"
            variant="standard"
            required
            fullWidth
            value={FName}
            onChange={(e) => SetFname(e.target.value)}
          />
        </Grid>

        <Grid item md={6} sm={12}>
          <TextField
            id="standard-required"
            label="Prenom"
            variant="standard"
            required
            fullWidth
            value={LName}
            onChange={(e) => SetLname(e.target.value)}
          />
        </Grid>

        <Grid item md={6} sm={12}>
          <TextField
            id="standard-required"
            label="Email"
            variant="standard"
            required
            fullWidth
            value={Email}
            onChange={(e) => SetEmail(e.target.value)}
          />
        </Grid>

        <Grid item md={6} sm={12}>
          <TextField
            id="standard-required"
            label="Password"
            variant="standard"
            required
            fullWidth
            value={Password}
            onChange={(e) => SetPssword(e.target.value)}
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
          sx={{ mx: 5 }}
          onClick={SubmitUser}
        >
          Ajouter l'utilisateur
        </Button>
        
        
      </Box>
      <br />
    </Box>
    );
}

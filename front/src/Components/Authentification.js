import req3 from '../Services/UserServices';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { TextField , Box, Button } from "@mui/material";

function Authentification() {

  const [Email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const navigate = useNavigate();

  async function LoginLogin() {
    try {
      const p = {
        Email: Email,
      };
      console.log(p);
      req3.Login(p).then((result)=>{
        console.log(result);
        if (result.data.user){
          navigate("/Admin/Catigories");
        }
        else{
          console.log("login failed !!");
        }

      }).catch((error)=>{
        console.log("login failed !!");
      });

      
      
    } catch (e) {
      console.log(e);
    }
  }

  return (

    <Box  sx={{
      ml: "37%",
      borderColor:"grey.500",
      my: 25,
      width: "25%",
      overflow: "hidden",
      height: "90%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}>
      <h3><center>Authentification</center></h3>
        <TextField id="outlined-basic" label="Email" variant="outlined" value={Email}  onChange={(e)=>SetEmail(e.target.value)} />
        <br />
        <TextField id="outlined-basic" label="Password" variant="outlined" value={password}  type={"password"} onChange={(e)=>SetPassword(e.target.value)} />
        <br />
        <Button
          variant="outlined"
          color="primary"
          sx={{ mx: 20 }}
          onClick={LoginLogin}
        >
          login
        </Button>
        <br />

    </Box>
    

  );
}

export default Authentification;
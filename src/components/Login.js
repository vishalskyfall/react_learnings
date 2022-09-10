import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';

const Login = () => {
    const [isSignup, setIsSignUp] = useState();

    // const [name, setName] = useState(); // no need to do it like this
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();

    const [inputData, setInputData] = useState({
        name: "", email: "", password: ""
    }); // fields name and value are important then the onChange event

    const handleChange = (e) => {
        setInputData((prevState) => ({
            ...prevState, //don't want to lose the prevState
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit =(e)=>{
        e.preventDefault(); //formData sends new http request when clicked on submit fields | we don't want that
        console.log(inputData);
    }

    const resetState = ()=>{
         setIsSignUp(!isSignup);
         setInputData({name: "", email: "", password: ""})
    }
  

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box display='flex' flexDirection={"column"} maxWidth={400} alignItems="center"
                    justifyContent={"center"}
                    margin="auto"
                    marginTop={5}
                    padding={3}
                    borderRadius={10}
                    boxShadow={'5px 5px 10px #ccc'}
                    sx={{
                        ":hover": {
                            boxShadow: '10px 10px 20px #ccc'
                        }
                    }}
                >
                    <Typography variant="h2" padding={3}
                        textAlign="center">{isSignup ? "Sign Up" : "Login"}</Typography>
                    {isSignup && (
                        <TextField name="name" value={inputData.name} onChange={handleChange} margin="normal" type={'text'} variant="outlined" placeholder='Name' />
                    )}
                    <TextField name="email" value={inputData.email} onChange={handleChange} margin="normal" type={'email'} variant="outlined" placeholder='Email' />
                    <TextField name="password" value={inputData.password} onChange={handleChange} margin="normal" type={'password'} variant="outlined" placeholder='Password' />


                    <Button endIcon={isSignup ? <HowToRegRoundedIcon /> : <LoginRoundedIcon />} type="submit" sx={{ margintop: 3, borderRadius: 10 }} variant="contained" color="primary">{isSignup ? "Sign Up" : "Login"}</Button>
                    <Button endIcon={isSignup ? <LoginRoundedIcon />:<HowToRegRoundedIcon />} onClick={resetState} sx={{ margintop: 3, borderRadius: 3 }} >
                        Change to {isSignup ? "Login" : "Sign Up"}  
                    </Button>
                </Box>
            </form>
        </div>
    )
}

export default Login
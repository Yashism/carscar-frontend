import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Container, Typography,CssBaseline, AppBar,Toolbar, BottomNavigation } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';


const LoginUser = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();

  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    
  };

const goToRegister = ()=>{
  navigate('/create_user')
}

  // ...

  return (
    <>
      <AppBar position="static" style={{ background: theme.palette.red[500] }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, color: theme.palette.text.primary }}>
          CarScar
        </Typography>
      </Toolbar>
    </AppBar>
    <Container component="main" maxWidth="md" >
      
    <CssBaseline />

    {/* Branding Section */}
    

    {/* Login Section */}
    <Box 
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh',
          }}
        >
      
     
      <Box 
  component="form" 
  onSubmit={handleSubmit} 
  noValidate 
  sx={{ 
    mt: 3, 
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    border: '3px solid', // This line adds the black border
    borderColor:theme.palette.blue[500],
    borderRadius: '5px',      // This line rounds the corners of the border
    padding: '48px'           // This adds some space inside the border
  }}
>
      <Typography component="h1" variant="h4" color="common.black">
        CarScar
      </Typography>
      <Typography component="h2" variant="subtitle1" color="common.black"style={{marginTop: 8}}>
      From scratches to solutions with CarScar: Snap, analyze, and estimate - all at your fingertips.
      </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Email Address"
          name="username"
          autoComplete="email"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ 
            mb: 2,
            '& .MuiOutlinedInput-input': {
              color: theme.palette.text.secondary, // Text color
            },
            '& .MuiOutlinedInput-root': {
              backgroundColor: theme.palette.white[50], // Light grey background
            },
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ 
            '& .MuiOutlinedInput-input': {
              color: theme.palette.text.secondary,
            },
            '& .MuiOutlinedInput-root': {
              backgroundColor: theme.palette.grey[50],
            },
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2,backgroundColor: theme => theme.palette.red[500],
            '&:hover': {
              backgroundColor: theme => theme.palette.red[600], // Adjust if necessary
            } }}
        >
          Login
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Button onClick={goToRegister} color="primary" sx={{ 
            '&:hover': {
              backgroundColor: theme => theme.palette.blue[200], // Adjust if necessary
            } }}>
              Don't have an account? Register
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Container>
  
  </>
  );

};

export default LoginUser;

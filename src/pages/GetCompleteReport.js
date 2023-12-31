import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Container, CircularProgress,Typography, CssBaseline, Link,AppBar, Toolbar, BottomNavigation } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';

import CarCrashIcon from '@mui/icons-material/CarCrash';



const GetCompleteReport = () => {
    const theme = useTheme();
    const [vinnumber, setVinNumber] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [uploadedImages, setUploadedImages] = useState([]);
    const [year, setYear] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    const handleVin= async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('vin_number', vinnumber);
        
    
        try {
            const response = await fetch('/api/get_VIN_infoV2', {
                method: 'POST',
                body: formData,
            });
            const responseData = await response.json();
            
    
            
            if (response) {
                console.log("This is what you have logged : ", responseData);

                // Handle success - e.g., show a success message, reset the form, etc.
            } else {
                console.error(response.data);
                // Handle error - show an error message to the user, etc.
            }
        } catch (error) {
            console.error('There was an error sending the data', error);
        }
    }

    const handleManual = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        formData.append('make', make);
        formData.append('model', model);
        formData.append('year', year);
        formData.append('vin_number', vinnumber);
        uploadedImages.forEach((img) => {
            formData.append('images', img);
        });
    
        try {
            const response = await fetch(`${process.env.REACT_APP_BACK_END_URL}/api/addCar`, {
                method: 'POST',
                body: formData,
            });
            const responseData = await response.json();
            
    
            
            if (response) {
                console.log("This is what you have logged : ", responseData);
                setIsLoading(false);
                navigate('/showreport', { state: responseData });
                // Handle success - e.g., show a success message, reset the form, etc.
            } else {
                setIsLoading(false);
                console.error(response.data);
                // Handle error - show an error message to the user, etc.
            }
        } catch (error) {
            console.error('There was an error sending the data', error);
        }
    }

    return (
        <>
            <AppBar position="static" style={{ background: theme.palette.red[500] }}>
                <Toolbar>
                    <Link href="/" style={{ textDecoration: 'none' }}>
                    <Typography variant="h4" style={{ flexGrow: 1, color: theme.palette.text.primary }}>
                        <CarCrashIcon/>
                        CarScar
                    </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="md" >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap:"20%",
                        height: '80vh',
                    }}
                >


                    <Box
                        component="form"
                        onSubmit={handleManual} 
                        noValidate
                        sx={{
                            mt: 3,
                            minWidth: '50%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            border: '3px solid', // This line adds the black border
                            borderColor: theme.palette.blue[500],
                            borderRadius: '5px',      // This line rounds the corners of the border
                            padding: '48px'           // This adds some space inside the border
                        }}
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="vin"
                            label="VIN Number"
                            name="vin_number"
                            autoFocus
                            value={vinnumber}
                            onChange={(e) => setVinNumber(e.target.value)}
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
                        <Button
    variant="outlined"
    component="label"
    sx={{
        mb: 2,
    }}
>
    Upload Images
    <input
        type="file"
        accept="image/*"
        hidden
        multiple
        onChange={(e) => {
            const files = Array.from(e.target.files);
            setUploadedImages(files);
        }}
    />
</Button>

{uploadedImages.map((image, index) => (
    <p key={index}>{image.name}</p>
))}
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
          Generate Report
        </Button>

                    </Box>
                    
                    <Typography variant="h3">
                        OR
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleManual} 
                        noValidate
                        sx={{
                            mt: 3,
                            minWidth: '50%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            border: '3px solid', // This line adds the black border
                            borderColor: theme.palette.blue[500],
                            borderRadius: '5px',      // This line rounds the corners of the border
                            padding: '48px'           // This adds some space inside the border
                        }}
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="make"
                            label="Make"
                            name="make"
                            autoFocus
                            value={make}
                            onChange={(e) => setMake(e.target.value)}
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
                            id="model"
                            label="Model"
                            name="model"
                            autoFocus
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
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
                            id="year"
                            label="Year"
                            name="year"
                            autoFocus
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
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
                        <Button
    variant="outlined"
    component="label"
    sx={{
        mb: 2,
    }}
>
    Upload Images
    <input
        type="file"
        accept="image/*"
        hidden
        multiple
        onChange={(e) => {
            const files = Array.from(e.target.files);
            setUploadedImages(files);
        }}
    />
</Button>

{uploadedImages.map((image, index) => (
    <p key={index}>{image.name}</p>
))}

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
          Generate Report
        </Button>

                    </Box>
                </Box>
                {isLoading && (
                <Box
                    sx={{
                        position: 'fixed', // This will make the loader overlay on top of the content
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',  // semi-transparent background
                    }}
                >
                    <CircularProgress size={80} color="inherit" 
                        sx={{ color: theme.palette.white[900] }}  />
                </Box>
            )}
            </Container>
        </>
    )
}

export default GetCompleteReport
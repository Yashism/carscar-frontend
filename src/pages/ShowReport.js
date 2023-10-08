import React from 'react';
import { useTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import { Button, Box, TextField, Container, Typography, CssBaseline, AppBar, Toolbar, BottomNavigation, Paper, Divider } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BuildIcon from '@mui/icons-material/Build';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PaymentIcon from '@mui/icons-material/Payment';

const ShowReport = () => {
    const location = useLocation();
    const reportData = location.state;
    const theme = useTheme();

    return (
        <>
            <AppBar position="static" style={{ background: theme.palette.red[500] }}>
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1, color: theme.palette.text.primary }}>
                        CarScar Report
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="md">
                <Box
                    sx={{
                        marginTop: theme.spacing(8),
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Paper elevation={5} style={{ width: '100%', padding: theme.spacing(4) }}>
                        <Typography variant="h4" align="center" gutterBottom style={{ flexGrow: 1, color: theme.palette.gray[900] }}>
                            Damage Analysis
                        </Typography>
                        <Divider variant="middle" style={{ margin: theme.spacing(2, 0) }} />
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Box display="flex" alignItems="center">
                                <MonetizationOnIcon fontSize="large" color="primary" style={{ marginRight: theme.spacing(2) }} />
                                <Typography variant="h6" style={{ flexGrow: 1, color: theme.palette.gray[900] }}>
                                    Estimated Cost: ${reportData["data"]["AI Estimated Cost "]}
                                </Typography>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <BuildIcon fontSize="large" color="secondary" style={{ marginRight: theme.spacing(2) }} />
                                <Typography variant="h6" style={{ flexGrow: 1, color: theme.palette.gray[900] }}>
    Parts to be replaced: {reportData["data"]["Parts to be replaced"].join(", ")}
</Typography>

                            </Box>
                            <Box display="flex" alignItems="center">
                                <TrendingUpIcon fontSize="large" color="action" style={{ marginRight: theme.spacing(2) }} />
                                <Typography variant="h6" style={{ flexGrow: 1, color: theme.palette.gray[900] }}>
                                    Scratches Cost: ${reportData["data"]["Scratches Cost"]}
                                </Typography>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <PaymentIcon fontSize="large" color="error" style={{ marginRight: theme.spacing(2) }} />
                                <Typography variant="h6" style={{ flexGrow: 1, color: theme.palette.gray[900] }}>
                                    Replacement Price: ${reportData["data"]["Replacement Price"]}
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </>
    );
}

export default ShowReport;

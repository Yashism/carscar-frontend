import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateUser from './pages/CreateUser';
import LoginUser from './pages/LoginUser';
import Dashboard from './pages/Dashboard';
import GetCompleteReport from './pages/GetCompleteReport';
import ShowReport from './pages/ShowReport';
import theme from './utils/themes';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const App = () => {

  return (
    <div style={{ margin: 0 }}>
      <CssBaseline />
    <ThemeProvider theme={theme}>
      
        <Router>
          <Routes>
            <Route path="/" element={<GetCompleteReport />} />
            <Route path="/login" element={<LoginUser />} />
            {/* <Route path="/posts" element={<Posts />} /> */}
            <Route path="/create_user" element={<CreateUser />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/getcompletereport" element={<GetCompleteReport />} />
            <Route path="/showreport" element={<ShowReport />} />
            {/* <Route path="/universal_gpt/outlook" element={<Outlook />} />
            <Route path="/graph_room/:room_id" element={<GraphRoom />} /> */}
          </Routes>
        </Router>
    

    </ThemeProvider>
    </div>
  );
};

export default App;

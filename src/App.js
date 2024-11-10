import './App.css';
import BasicTabs from './components/BasicTabs/BasicTabs';

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Unit Converter
          </Typography>
          <BasicTabs />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

/**
    <div class="mainContainer">
      <div class="container">
        <h1>Unit Converter</h1>
        <div class="tabs">
          <button class="tab-btn active" onclick="loadForm('length.html')">Length</button>
          <button class="tab-btn" onclick="loadForm('temperature.html')">Temperature</button>
        </div>
        <div id="form-container"></div>
        <div id="result-container" class="result-container" style="display: none;">
          <p id="result-text"></p>
          <button class="reset-button" onclick="reset()">Reset</button>
        </div>
      </div>
      <footer class="footer-layout">
        <button class="theme-btn"></button>
      </footer>
    </div>

 */

export default App;

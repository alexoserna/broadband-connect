import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a custom theme
const theme = createTheme({

  palette:{
    primary: {
      main: '#C0392B',
      dark: '#D44F40'
    },
    secondary:{
      main: '#007B43',
    },
    // background colors
    backgroundCream: {
      main: '#F4ECE4',
      card: '#F1E3DA',
      dark: '#1A130A',
    },
    textColor:{
      main: '#2C1F0E',
      dark: 'F2E5D4',
    },
  },

});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme = {theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';

// Create a custom theme
const theme = createTheme({

  palette:{
    primary: {
      main: '#C0392B',
    },
    secondary:{
      main: '#007B43',
    },
    accent: {
      main: '#D4A017',
    },
    // background colors
    backgroundCream: {
      main: '#F4ECE4',
      card: '#F1E3DA',
    },
    textColor:{
      main: '#2C1F0E',
    },
  },

});

// Create dark mode theme to be implemented later
const themeDark = createTheme({

  palette:{
    primary: {
      main: '#D44F40',
    },
    secondary:{
      main: '#85FFC8',
    },
    accent:{
      main:'#E8B22C'
    },
    // background colors
    backgroundCream: {
      main: '#1A130A',
    },
    textColor:{
      main: 'F2E5D4',
    },
  },

});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme = {theme}>
      <CssBaseline />
      <GlobalStyles 
        styles={{
          body: {backgroundColor: theme.palette.backgroundCream.main},
        }}
      />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)

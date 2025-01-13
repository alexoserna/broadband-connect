import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a custom theme
const theme = createTheme({

  palette:{
    primary:{
      main: '#C0392B',
    },
    secondary:{
      main: '#007B43',
    },
  }

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

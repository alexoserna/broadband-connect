import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { LoadingProvider } from "./context/LoadingContext";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL || 'http://localhost:3001/graphql', // Replace with your server's GraphQL endpoint
  cache: new InMemoryCache(),          // Apollo's caching mechanism
});

// Create a custom theme
let theme = createTheme({

  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none", // Removes focus for all IconButtons
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "textPrimary", // Force inheritance globally
          textDecoration: "none", // Remove underline globally
        },
      },
    },
  },

  palette: {
    text: {
      primary: '#2C1F0E',
      secondary: '#F1E3DA',
      hyper: '#153243',
      muted: '#6e5f50'
    },
    primary: {
      main: '#C0392B',
      secondary: '#962518',
    },
    secondary: {
      main: '#007B43',
      secondary: '#94B39A',
      light: '#b7d0bc',
    },
    accent: {
      main: '#D4A017',
      secondary: '#D4D117',
    },
    // background colors
    background: {
      default: '#F4ECE4',
      card: '#F1E3DA',
    },
    backgroundCream: {
      main: '#F4ECE4',
      secondary: '#dcd6ce',
      card: '#F1E3DA',
    },
  },

});

theme = responsiveFontSizes(theme);

// Create dark mode theme to be implemented later
const themeDark = createTheme({
  typography: {
    h5: {
      fontWeight: 1200, // Apply to all `h6` elements
    },
    body2: {
      fontWeight: 400, // Apply to all `body2` elements
    },
  },
  palette: {
    primary: {
      main: '#D44F40',
    },
    secondary: {
      main: '#85FFC8',
    },
    accent: {
      main: '#E8B22C'
    },
    // background colors
    backgroundCream: {
      main: '#1A130A',
    },
    textColor: {
      main: 'F2E5D4',
    },
  },

});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <LoadingProvider>
          <CssBaseline />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </LoadingProvider>
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>,
)

import './App.css';
import React, { useEffect, useState, useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from '@emotion/react';
import Home from './pages/home';
import NotFound from './pages/404';
import { createTheme } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: '#d4d4d4',
    },
  },
});


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <ThemeProvider theme={theme}>
          <>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </>
        </ThemeProvider>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;


const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  return children || null;
}
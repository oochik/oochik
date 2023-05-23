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
import Navbar from './comps/navbar';
import styled from '@emotion/styled';
import bg from './assets/backgroundCircles.svg'
import MintPage from './pages/mintPage';


const theme = createTheme({
  palette: {
    primary: {
      main: '#d4d4d4',
    },
  },
});
const HomeContainer = styled.div`
background-color: #19241b;
background-image: url(${bg});
background-size:cover;
background-repeat:repeat-y;
// background-position:top;
// height:100vh;
`


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <ThemeProvider theme={theme}>
          <>
            <HomeContainer>
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/mint" element={<MintPage />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </HomeContainer>
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
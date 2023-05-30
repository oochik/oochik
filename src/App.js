import './App.css';
import React, { useEffect, useState, useContext, useMemo, } from 'react';
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
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';
import { MetaplexProvider } from './utils/metaplexProvider';


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
  const [network, setNetwork] = useState(WalletAdapterNetwork.Devnet);

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );
  
  useEffect(() => {
    const cluster = process.env.REACT_APP_CLUSTER
    switch (cluster) {
      case "devnet":
        setNetwork(WalletAdapterNetwork.Devnet);
        break;
      case "mainnet":
        setNetwork(WalletAdapterNetwork.Mainnet);
        break;
      case "testnet":
        setNetwork(WalletAdapterNetwork.Testnet);
        break;
      default:
        setNetwork(WalletAdapterNetwork.Devnet);
        break;
    }
  }, [])



  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <MetaplexProvider>

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

          </MetaplexProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
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
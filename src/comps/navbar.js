import styled from "@emotion/styled";
import { ArrowForward, ArrowForwardIos } from "@mui/icons-material";
import { ArrowRight2 } from "iconsax-react";
import { Link } from "react-router-dom";
import InstagramIcon from '../assets/instagram.svg'
import DiscordIcon from '../assets/discord.svg'
import TwitterIcon from '../assets/twitter.svg'
import MenuIcon from '../assets/menu.svg'
import Wallet2Icon from '../assets/wallet-2.svg'
import {
    WalletModalProvider,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

const NavbarTablet = styled.div`
position:sticky;
top:0;
height: 60px;
margin: 0 30px;
display:flex;
justify-content:space-between;
align-items:center;
// background: rgb(159,200,59);
background: radial-gradient(circle, rgba(159,200,59,0) 0%, rgba(159,200,59,0.2) 90%, rgba(159,200,59,0.2) 100%);
// filter: blur(10px);
border-bottom-left-radius:48px;
border-bottom-right-radius:48px;
border-bottom:1px solid;
border-color:#9FC83B;
overflow:hidden;
padding:0 30px;
background-blend-mode: overlay;
backdrop-filter:blur(30px);
z-index:88;
@media screen and (max-width: 575px) {
    padding:0 50px;
}    

`
const ArrowButton = styled.div`
border-radius:50%;
border-color:#9FC83B;
width:35px;
height:35px;
border-right:0.5px solid;
display:flex;
justify-content:center;
align-items:center;
`
const SocialMedia = styled.div`
background-size:contain;
background-repeat:no-repeat;
background-position:center;
width:32px;
height:32px;
cursor:pointer;
margin-left:40px;
@media screen and (max-width: 575px) {
    margin:0;
}    
`


const Navbar = ({ connectButton }) => {
    return (
        <>
            {/* desktop navbar  */}
            <div className=" d-none d-lg-flex align-items-center justify-content-between" style={{
                zIndex: 88, backdropFilter: ' blur(30px)', position: 'sticky', top: '0', backgroundColor: 'rgba(25,36,27,0.0)', height: "100px",
                // marginBottom: '100px',
                padding: '0 40px'
            }}>
                <div className="d-flex align-items-center col-6">
                    <Link to={'/'} className="me-5" style={{ fontSize: '20px', color: '#d1d1d1', textDecoration: "none" }}>
                        Home
                    </Link>
                    <Link to={'https://discord.com/channels/1081235620455796837/1103761932160335893'} style={{ fontSize: '20px', color: '#d1d1d1', textDecoration: "none" }}>
                        Litepaper
                    </Link>
                </div>
                <div className="d-flex align-items-center col-6 justify-content-end">
                    <Link style={{ fontSize: '20px', color: '#9FC83B', textDecoration: "none" }}>
                        <div className="d-flex align-items-center">
                            <WalletMultiButton />
                            {/* Connect Wallet */}
                            <ArrowButton className="ms-2">
                                <ArrowRight2 size="18px" />
                            </ArrowButton>
                        </div>
                    </Link>
                </div>
            </div>
            {/* tablet navbar */}
            <NavbarTablet className="mb-5 d-none d-sm-flex d-lg-none">
                <div className="d-flex align-items-center col-6">
                    <Link to={'/'} className="me-5" style={{ fontSize: '16px', color: '#d1d1d1', textDecoration: "none" }}>
                        Home
                    </Link>
                    <Link to={'https://discord.com/channels/1081235620455796837/1103761932160335893'} style={{ fontSize: '16px', color: '#d1d1d1', textDecoration: "none" }}>
                        Litepaper
                    </Link>
                </div>
                <div className="d-flex col-6 align-items-center justify-content-end">
                    <Link to={'https://www.instagram.com/oochikdao/'} style={{ textDecoration: 'none', color: 'inherit', width: "min-content", height: "min-content"}}>
                        <SocialMedia
                            style={{ backgroundImage: `url(${InstagramIcon})` }}
                        />
                    </Link>
                    
                    <Link to={'https://discord.gg/7XrDR78PZM'} style={{ textDecoration: 'none', color: 'inherit', width: "min-content", height: "min-content"}}>
                        <SocialMedia
                            style={{ backgroundImage: `url(${DiscordIcon})` }}
                        />
                    </Link>
                    
                    <Link to={'https://twitter.com/OochikDao?s=20'} style={{ textDecoration: 'none', color: 'inherit', width: "min-content", height: "min-content"}}>
                        <SocialMedia
                            style={{ backgroundImage: `url(${TwitterIcon})` }}
                        />
                    </Link>

                    <Link to={'https://twitter.com/OochikDao?s=20'} style={{ textDecoration: 'none', color: 'inherit', width: "min-content", height: "min-content"}}>
                        <SocialMedia
                            style={{ backgroundImage: `url(${Wallet2Icon})` }}
                        />
                    </Link>
                        
                </div>
            </NavbarTablet>
            {/*mobile navbar*/}
            <NavbarTablet className="mb-5 d-flex d-sm-none">
                    <Link to={'https://www.instagram.com/oochikdao/'} style={{ textDecoration: 'none', color: 'inherit', width: "min-content", height: "min-content"}}>
                        <SocialMedia
                            style={{ backgroundImage: `url(${InstagramIcon})` }}
                        />
                    </Link>
                    
                    <Link to={'https://discord.gg/7XrDR78PZM'} style={{ textDecoration: 'none', color: 'inherit', width: "min-content", height: "min-content"}}>
                        <SocialMedia
                            style={{ backgroundImage: `url(${DiscordIcon})` }}
                        />
                    </Link>
                    
                    <Link to={'https://twitter.com/OochikDao?s=20'} style={{ textDecoration: 'none', color: 'inherit', width: "min-content", height: "min-content"}}>
                        <SocialMedia
                            style={{ backgroundImage: `url(${TwitterIcon})` }}
                        />
                    </Link>

                    <Link to={'https://twitter.com/OochikDao?s=20'} style={{ textDecoration: 'none', color: 'inherit', width: "min-content", height: "min-content"}}>
                        <SocialMedia
                            style={{ backgroundImage: `url(${Wallet2Icon})` }}
                        />
                    </Link>
            </NavbarTablet>
        </>
    );
}

export default Navbar;
import styled from "@emotion/styled";
import { Instagram } from "iconsax-react";
import InstagramIcon from '../assets/instagram.svg'
import DiscordIcon from '../assets/discord.svg'
import TwitterIcon from '../assets/twitter.svg'
import { Twitter } from "@mui/icons-material";

const Bar = styled.div`
height: 400px;
width:80px;
right:0;
top:30%;
position:fixed;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
// background: rgb(159,200,59);
background: radial-gradient(circle, rgba(159,200,59,0) 0%, rgba(159,200,59,0.09) 0%, rgba(159,200,59,0.09) 100%);
border-bottom-left-radius:48px;
border-top-left-radius:48px;
border-left:1px solid;
border-color:#9FC83B;
padding:30px;
background-blend-mode: overlay;
mix-blend-mode: screen;
z-index:999;

`
const GradientTitle = styled.div`
background: -webkit-linear-gradient(#9fc83b 0%, #008d31 70%);
background: linear-gradient(to bottom, #9fc83b 0%, #008d31 70%);
background: rgb(159,200,59);
background: linear-gradient(177deg, rgba(159,200,59,1) 0%, rgba(0,141,49,1) 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

const SocialMedia = styled.div`
background-size:contain;
background-repeat:no-repeat;
background-position:center;
width:42px;
height:42px;
cursor:pointer;
`





const Naver = () => {
    return (<Bar className="d-none d-lg-flex">
        <SocialMedia
            style={{ backgroundImage: `url(${InstagramIcon})` }}
        />
        <SocialMedia
            style={{ backgroundImage: `url(${DiscordIcon})` }}
        />
        <SocialMedia
            style={{ backgroundImage: `url(${TwitterIcon})` }}
        />
    </Bar>);
}

export default Naver;
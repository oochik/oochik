import styled from "@emotion/styled";
import InstagramIcon from '../assets/instagram.svg'
import DiscordIcon from '../assets/discord.svg'
import TwitterIcon from '../assets/twitter.svg'
import InstagramHover from '../assets/instagramHover.svg'
import DiscordHover from '../assets/discordHover.svg'
import TwitterHover from '../assets/twitterHover.svg'

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
backdrop-filter:blur(1px);

`
const GradientTitle = styled.div`
background: -webkit-linear-gradient(#9fc83b 0%, #008d31 70%);
background: linear-gradient(to bottom, #9fc83b 0%, #008d31 70%);
background: rgb(159,200,59);
background: linear-gradient(177deg, rgba(159,200,59,1) 0%, rgba(0,141,49,1) 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

const Instagram = styled.div`
background-image: url(${InstagramIcon});
background-size:contain;
background-repeat:no-repeat;
background-position:center;
width:42px;
height:42px;
cursor:pointer;
&:hover {
    background-image: url(${InstagramHover});
};
`
const Discord = styled.div`
background-image: url(${DiscordIcon});
background-size:contain;
background-repeat:no-repeat;
background-position:center;
width:42px;
height:42px;
cursor:pointer;
&:hover {
    background-image: url(${DiscordHover});
};
`
const Twitter = styled.div`
background-image: url(${TwitterIcon});
background-size:contain;
background-repeat:no-repeat;
background-position:center;
width:42px;
height:42px;
cursor:pointer;
&:hover {
    background-image: url(${TwitterHover});
};
`





const Naver = () => {
    return (<Bar className="d-none d-lg-flex">
        <Instagram />
        <Discord />
        <Twitter />
        {/* <SocialMedia
            style={{ backgroundImage: `url(${InstagramIcon})` }}
        />
        <SocialMedia
            style={{ backgroundImage: `url(${DiscordIcon})` }}
        />
        <SocialMedia
            style={{ backgroundImage: `url(${TwitterIcon})` }}
        /> */}
    </Bar>);
}

export default Naver;
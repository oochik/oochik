import styled from "@emotion/styled";
import { Instagram } from "iconsax-react";

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





const Naver = () => {
    return (<Bar className="d-none d-lg-flex">
        <GradientTitle>
            <Instagram size="40px" color="#9FC83B" style={{ color: 'linear-gradient(177deg, rgba(159,200,59,1) 0%, rgba(0,141,49,1) 100%)' }} />
        </GradientTitle>
        <Instagram size="40px" color="#9FC83B" />
        <Instagram size="40px" color="#9FC83B" />
    </Bar>);
}

export default Naver;
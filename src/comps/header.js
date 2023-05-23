import styled from "@emotion/styled";
import giff from '../assets/0.gif'
import banner from '../assets/oochik-banner.svg'
import GoToButton from "./goToButton";


const HeaderContainer = styled.div`
height:100vh;
// width:100%;
padding:30px;
border:1px solid white;
`
const OoChikGif = styled.div`
background-image: url(${banner});
background-size:contain;
background-repeat:no-repeat;
background-position:center;
height:500px;
width:412px;
border:yellow solid 1px;
@media screen and (max-width: 990px) {
    height:340px;
    width:279px;
};
@media screen and (max-width: 575px) {
    height:205px;
    width:166px;
}    
`
const Title = styled.h5`
font-weight:700;
color:white;
font-size:26px;
`
const GradientTitle = styled.h5`
font-size: 40px;
background: -webkit-linear-gradient(#ffffff, #6B6F6C);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`
const Par = styled.p`
font-weight:400;
color:#d4d4d4;
`

const HalfCircle = styled.div`
border-radius:50%;
border-left:1px solid;
border-top:1px solid;
border-color:#9FC83B;
width:80px;
height:80px;
position:absolute;
`


const Header = () => {
    return (
        <HeaderContainer className="d-flex w-100 flex-column flex-sm-row-reverse">
            <div style={{ border: "1px solid blue" }} className="col-12 col-sm-5 col-lg-6 d-flex justify-content-center align-items-center">
                <OoChikGif />
            </div>
            <div style={{ border: "1px solid red", }} className="col-12 col-sm-7 col-lg-6 d-flex flex-column text-start">
                <div style={{ border: "1px solid blue", position: "relative", padding: '60px 0 0 60px' }}>
                    <HalfCircle style={{ opacity: 0.2, top: 0, left: 0 }} />
                    <HalfCircle style={{ opacity: 0.6, top: '15px', left: '15px' }} />
                    <HalfCircle style={{ top: '30px', left: '30px' }} />
                    <Title className="mb-2">
                        Ai robotics is on next level of tech
                    </Title>
                    <Par>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius</Par>
                </div>
                <div className="mt-5 mb-5" style={{ border: "1px solid blue", position: "relative", padding: '60px 0 0 60px' }}>
                    <HalfCircle style={{ opacity: 0.2, top: 0, left: 0 }} />
                    <HalfCircle style={{ opacity: 0.6, top: '15px', left: '15px' }} />
                    <HalfCircle style={{ top: '30px', left: '30px' }} />
                    <GradientTitle >
                        Ai robotics is on next level of tech
                    </GradientTitle>
                </div>
                <GoToButton />
            </div>
        </HeaderContainer>
    );
}

export default Header;
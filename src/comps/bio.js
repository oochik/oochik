import styled from "@emotion/styled";
import Particle from "./particles";
import nodeBG from '../assets/nodeBG.svg'

const Title = styled.h5`
font-weight:700;
color:#9FC83B;
text-transform:capitalize;
font-size:45px;
@media screen and (max-width: 990px) {
    font-size:32px;
};
@media screen and (max-width: 575px) {
    font-size:30px;
}    
`
const BioTextContainer = styled.div`
padding:0 100px;
@media screen and (max-width: 990px) {
    // padding:30px;
    padding:0;
};

`
const BioContainer = styled.div`
// background-image: url(${nodeBG});
// background-size:cover;
// background-repeat:no-repeat;
// background-position:bottom;
padding-bottom:30vh;
@media screen and (max-width: 990px) {
    padding:30px;
};

`

const Bio = () => {
    return (
        <BioContainer className="d-flex justify-content-center">
            <BioTextContainer className="d-flex flex-column align-items-center text-center col-12 col-lg-8">
                <Title className="my-5">Ai robotics is on next level of tech</Title>
                <p style={{ color: "white", fontSize: "18px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </BioTextContainer>
            {/* <Particle /> */}
        </BioContainer>
    );
}

export default Bio;
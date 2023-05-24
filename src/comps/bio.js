import styled from "@emotion/styled";
import Particle from "./particles";

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
    padding:30px;
};

`

const Bio = () => {
    return (
        <>
            <BioTextContainer className="d-flex flex-column align-items-center text-center">
                <Title>Ai robotics is on next level of tech</Title>
                <p style={{ color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </BioTextContainer>
            <Particle />
        </>
    );
}

export default Bio;
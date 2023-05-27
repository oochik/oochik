import styled from "@emotion/styled";
import Particle from "./particles";
import nodeBG from '../assets/nodeBG.svg'
import NodeFooter from "./nodeFooter";

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
// padding-bottom:30vh;
height:100vh;
@media screen and (max-width: 990px) {
    padding:30px;
    height:auto;
};

`

const Bio = () => {
    return (
        <BioContainer className="d-flex flex-column align-items-center justify-content-center">
            <BioTextContainer className="d-flex flex-column align-items-center text-center col-12 col-lg-8">
                <Title className="my-5">Collaborate, Create, and Conquer with Oochik DAO</Title>
                <p className="m-0" style={{ color: "white", fontSize: "18px" }}>
                    Oochik is a Decentralized Autonomous Organization (DAO) focused on the intersection of creativity and subcultures within the Web 3.0 ecosystem. Our mission is to bring together creative individuals passionate about social communication, art, technology, and independent creativity. We aim to document and promote the movement connecting creativity and subcultural expressions with Web 3.0 through blockchain technology.
                </p>
            </BioTextContainer>
            {/* <Particle /> */}
            {/* <NodeFooter /> */}
        </BioContainer>
    );
}

export default Bio;
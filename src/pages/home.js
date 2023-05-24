import styled from "@emotion/styled";
import bg from '../assets/backgroundCircles.svg'
import Naver from "../comps/naver";
import Header from "../comps/header";
import Plan from "../comps/plan";
import Particle from "../comps/particles";
import Bio from "../comps/bio";
const HomeContainer = styled.div`
// height:100vh;
// border:1px solid purple; 
// overflow-y:scroll;
`

const Home = () => {
    return (
        <HomeContainer className="d-flex flex-column ">
            <Naver />
            <Header />
            <Bio />
            <Plan />
        </HomeContainer>
    );
}

export default Home;
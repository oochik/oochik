import styled from "@emotion/styled";
import bg from '../assets/backgroundCircles.svg'
import Naver from "../comps/naver";
import Header from "../comps/header";
import Plan from "../comps/plan";
const HomeContainer = styled.div`
// height:100vh;
border:1px solid purple; 
`

const Home = () => {
    return (
        <HomeContainer className="d-flex flex-column justify-content-center align-items-center text-center">
            <Naver />
            <Header/>
            <Plan/>
        </HomeContainer>
    );
}

export default Home;
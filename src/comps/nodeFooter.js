import styled from "@emotion/styled";
import Particle from "./particles";

const Container = styled.div`
overflow:hidden;
width:100%;
clip-path: polygon(0 55%, 100% 0, 100% 100%, 0% 100%);
background-color:transparent;
`
const NodeFooter = () => {
    return (<Container>
        <Particle />
    </Container>);
}

export default NodeFooter;
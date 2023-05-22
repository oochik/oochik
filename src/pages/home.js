import styled from "@emotion/styled";

const ContainerRadius = styled.div`
height: 50px;
overflow: hidden ;
`

const Home = () => {
    return (
        <div className="d-flex justify-content-center text-center">
            <ContainerRadius style={{ transform: 'translateX(7px)' }} className="d-flex justify-content-center text-center">
                <div className="btn-gradient-up"></div>
            </ContainerRadius>

            <ContainerRadius style={{ transform: 'translate(-8px,50px)' }} className="d-flex justify-content-center text-center align-items-end">
                <div className="btn-gradient-down"></div>
            </ContainerRadius>

            <ContainerRadius style={{ transform: 'translateX(7px)' }} className="d-flex justify-content-center text-center">
                <div className="btn-gradient-up"></div>
            </ContainerRadius>

            <ContainerRadius style={{ transform: 'translate(-8px,50px)' }} className="d-flex justify-content-center text-center align-items-end">
                <div className="btn-gradient-down"></div>
            </ContainerRadius>

            <ContainerRadius style={{ transform: 'translateX(7px)' }} className="d-flex justify-content-center text-center">
                <div className="btn-gradient-up"></div>
            </ContainerRadius>

            <ContainerRadius style={{ transform: 'translate(-8px,50px)' }} className="d-flex justify-content-center text-center align-items-end">
                <div className="btn-gradient-down"></div>
            </ContainerRadius>
        </div>
    );
}

export default Home;
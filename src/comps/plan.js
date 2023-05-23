import styled from "@emotion/styled";

const ContainerRadius = styled.div`
height: 50px;
overflow: hidden ;
`
const PlanContainer = styled.div`
height: 100vh;
`

const Plan = () => {
    return (
        <PlanContainer className="d-flex">
            <div className="d-flex"
                // style={{ transform: 'translateX(15px)' }}
            >
                <ContainerRadius
                    className="d-flex justify-content-center text-center">
                    <div className="btn-gradient-up"></div>
                </ContainerRadius>
                <ContainerRadius style={{ transform: 'translate(-15px,50px)' }} className="d-flex justify-content-center text-center align-items-end">
                    <div className="btn-gradient-down"></div>
                </ContainerRadius>
            </div>
            <div className="d-flex"
                style={{ transform: 'translateX(-30px)' }}
            >
                <ContainerRadius
                    className="d-flex justify-content-center text-center">
                    <div className="btn-gradient-up"></div>
                </ContainerRadius>
                <ContainerRadius style={{ transform: 'translate(-15px,50px)' }} className="d-flex justify-content-center text-center align-items-end">
                    <div className="btn-gradient-down"></div>
                </ContainerRadius>
            </div>
            <div className="d-flex"
                style={{ transform: 'translateX(-60px)' }}
            >
                <ContainerRadius
                    className="d-flex justify-content-center text-center">
                    <div className="btn-gradient-up"></div>
                </ContainerRadius>
            </div>
        </PlanContainer>
    );
}

export default Plan;
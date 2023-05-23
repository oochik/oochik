import styled from "@emotion/styled";

const ContainerRadius = styled.div`
height: 100px;
overflow: hidden ;
`
const PlanContainer = styled.div`
// height: 100vh;
// border:1px solid green;
margin-bottom:100px;
width:100%;
`

const Plan = () => {
    return (
        <PlanContainer className="d-flex justify-content-center align-items-center">
            <div className="d-none d-lg-flex justify-content-center align-items-center">

                <div className="d-flex"
                // style={{ transform: 'translateX(15px)' }}
                >
                    <ContainerRadius
                        className="d-flex justify-content-center text-center">
                        <div className="btn-gradient-up"></div>
                    </ContainerRadius>
                    <ContainerRadius style={{ transform: 'translate(-15px,100px)' }} className="d-flex justify-content-center text-center align-items-end">
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
                    <ContainerRadius style={{ transform: 'translate(-15px,100px)' }} className="d-flex justify-content-center text-center align-items-end">
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

            </div>

        </PlanContainer>
    );
}

export default Plan;
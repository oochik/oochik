import styled from "@emotion/styled";

const ContainerRadius = styled.div`
height: 100px;
overflow: hidden ;
`
const PlanContainer = styled.div`
height: 100vh;
// border:1px solid green;
margin-bottom:30vh;
padding-top:30vh;
width:100%;
background-color:rgba(25,36,27,1);
`
const BioTextContainer = styled.div`
padding:50px 100px 0;
@media screen and (max-width: 990px) {
    padding:30px;
};

`

const Plan = () => {
    return (
        <PlanContainer className="d-flex flex-column aign-items-center">
            <div className="d-none d-lg-flex justify-content-center" style={{ height: 'min-content', marginBottom: "100px" }}>
                <div className="d-flex" style={{ height: 'min-content' }}>
                    <ContainerRadius
                        className="d-flex justify-content-center text-center">
                        <div className="btn-gradient-up" style={{ color: "#727272", paddingTop: '50px', fontSize: '24px', }}>S<span style={{ color: "white" }}>1</span></div>
                    </ContainerRadius>
                    <ContainerRadius style={{ transform: 'translate(-15px,100px)' }} className="d-flex justify-content-center text-center align-items-end">
                        <div className="btn-gradient-down"></div>
                    </ContainerRadius>
                </div>
                <div className="d-flex"
                    style={{ transform: 'translateX(-30px)', height: 'min-content' }}
                >
                    <ContainerRadius
                        className="d-flex justify-content-center text-center">
                        <div className="btn-gradient-up" style={{ color: "#727272", paddingTop: '50px', fontSize: '24px' }}>S<span style={{ color: "white" }}>2</span></div>
                    </ContainerRadius>
                    <ContainerRadius style={{ transform: 'translate(-15px,100px)' }} className="d-flex justify-content-center text-center align-items-end">
                        <div className="btn-gradient-down"></div>
                    </ContainerRadius>
                </div>
                <div className="d-flex"
                    style={{ transform: 'translateX(-60px)', height: 'min-content' }}
                >
                    <ContainerRadius
                        className="d-flex justify-content-center text-center">
                        <div className="btn-gradient-up" style={{ color: "#727272", paddingTop: '50px', fontSize: '24px' }}>S<span style={{ color: "white" }}>3</span></div>
                    </ContainerRadius>
                </div>
            </div>
            <BioTextContainer className="d-flex flex-column align-items-center text-center">
                <p style={{ color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </BioTextContainer>
        </PlanContainer >
    );
}

export default Plan;
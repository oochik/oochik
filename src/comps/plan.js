import styled from "@emotion/styled";
import { ArrowLeft, ArrowLeft2, ArrowRight2 } from "iconsax-react";

const ContainerRadius = styled.div`
height: 100px;
overflow: hidden ;
@media screen and (max-width: 990px) {
    height:50px;
};
@media screen and (max-width: 575px) {
    width: 50px;
    height: 100px;
};

`
const ContainerRadiusBottom = styled.div`
height: 100px;
overflow: hidden ;
transform: translate(-15px,100px);
@media screen and (max-width: 990px) {
    height:50px;
    transform: translate(-15px,50px);
};
@media screen and (max-width: 575px) {
    width: 50px;
    height: 100px;
    transform: translate(50px,-15px);

};

`
const PlanContainer = styled.div`
height: 100vh;
// margin-bottom:30vh;
width:100%;
background:rgba(25,36,27,1);
background: linear-gradient(177deg,rgba(25,36,27,0) 0%, rgba(25,36,27,1) 30%,rgba(25,36,27,1) 50%, rgba(25,36,27,0) 100%);
padding:100px;
@media screen and (max-width: 990px) {
    padding:30px;
    height:auto;
};
@media screen and (max-width: 575px) {
    background: linear-gradient(90deg, rgba(25,36,27,1) 40%, rgba(25,36,27,0) 100%);
};

`
const BioTextContainer = styled.div`
// padding:50px 100px 0;
// @media screen and (max-width: 990px) {
//     padding:30px;
// };

`

const Plan = () => {
    return (
        <PlanContainer className="d-flex flex-column aign-items-center justify-content-center">
            <div className="my-5 d-flex justify-content-center align-items-center"><ArrowLeft2 color="#9FC83B" size="16px" cursor='pointer' />&nbsp;<span style={{ color: 'white' }}>Plan Applicable In <span style={{ color: '#9FC83B' }}>2023/02/12</span></span>&nbsp;<ArrowRight2 color="#9FC83B" size="16px" cursor='pointer' /></div>

            <div className='d-flex flex-sm-column'>
                <div className="d-none d-sm-flex justify-content-center"
                    style={{ height: 'min-content', marginBottom: "100px", paddingLeft: '60px' }}>
                    <div className="d-flex" style={{ height: 'min-content' }}>
                        <ContainerRadius
                            className="d-flex justify-content-center text-center">
                            <div className="btn-gradient-up" style={{ color: "#727272", }}>S<span style={{ color: "white" }}>1</span></div>
                        </ContainerRadius>
                        <ContainerRadiusBottom className="d-flex justify-content-center text-center align-items-end">
                            <div className="btn-gradient-down"></div>
                        </ContainerRadiusBottom>
                    </div>
                    <div className="d-flex"
                        style={{ transform: 'translateX(-30px)', height: 'min-content' }}
                    >
                        <ContainerRadius
                            className="d-flex justify-content-center text-center">
                            <div className="btn-gradient-up"
                                style={{ color: "#727272" }}>
                                S
                                <span style={{ color: "white" }}>2</span>
                            </div>
                        </ContainerRadius>
                        <ContainerRadiusBottom
                            className="d-flex justify-content-center text-center align-items-end">
                            <div className="btn-gradient-down"></div>
                        </ContainerRadiusBottom>
                    </div>
                    <div className="d-flex"
                        style={{ transform: 'translateX(-60px)', height: 'min-content' }}
                    >
                        <ContainerRadius
                            className="d-flex justify-content-center text-center">
                            <div
                                className="btn-gradient-up"
                                style={{ color: "#727272" }}>
                                S
                                <span style={{ color: "white" }}>3</span>
                            </div>
                        </ContainerRadius>
                    </div>
                </div>


                <div className="d-flex d-sm-none flex-column align-items-center"
                    style={{ width: 'min-content', marginRight: '50px', paddingTop: '60px' }}>
                    <div className="d-flex flex-column" style={{ width: 'min-content' }}>
                        <ContainerRadius
                            className="d-flex flex-column justify-content-center text-center">
                            <div className="btn-gradient-left" style={{ color: "#727272", }}>S<span style={{ color: "white" }}>1</span></div>
                        </ContainerRadius>
                        <ContainerRadiusBottom className="d-flex flex-column justify-content-center text-center align-items-end">
                            <div className="btn-gradient-right"></div>
                        </ContainerRadiusBottom>
                    </div>
                    <div className="d-flex flex-column"
                        style={{ transform: 'translateY(-30px)', width: 'min-content' }}
                    >
                        <ContainerRadius
                            className="d-flex flex-column justify-content-center text-center">
                            <div className="btn-gradient-left"
                                style={{ color: "#727272" }}>
                                S
                                <span style={{ color: "white" }}>2</span>
                            </div>
                        </ContainerRadius>
                        <ContainerRadiusBottom
                            className="d-flex flex-column justify-content-center text-center align-items-end">
                            <div className="btn-gradient-right"></div>
                        </ContainerRadiusBottom>
                    </div>
                    <div className="d-flex flex-column"
                        style={{ transform: 'translateY(-60px)', width: 'min-content' }}
                    >
                        <ContainerRadius
                            className="d-flex flex-column justify-content-center text-center">
                            <div
                                className="btn-gradient-left"
                                style={{ color: "#727272" }}>
                                S
                                <span style={{ color: "white" }}>3</span>
                            </div>
                        </ContainerRadius>
                    </div>
                </div>


                <BioTextContainer className="d-flex flex-column align-items-center justify-content-center text-center">
                    <p className="mt-0 mt-lg-5" style={{ color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </BioTextContainer>
            </div>

        </PlanContainer >
    );
}

export default Plan;
import styled from "@emotion/styled";
import { ArrowForward, ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";

const NavbarTablet = styled.div`
height: 60px;
margin: 0 30px;
display:flex;
justify-content:space-between;
align-items:center;
// background: rgb(159,200,59);
background: radial-gradient(circle, rgba(159,200,59,0) 0%, rgba(159,200,59,0.2) 90%, rgba(159,200,59,0.2) 100%);
// filter: blur(10px);
border-bottom-left-radius:48px;
border-bottom-right-radius:48px;
border-bottom:1px solid;
border-color:#9FC83B;
overflow:hidden;
padding:0 30px;
background-blend-mode: overlay;
`
const ArrowButton = styled.div`
border-radius:50%;
border-color:#9FC83B;
width:35px;
height:35px;
border-right:0.5px solid;
display:flex;
justify-content:center;
align-items:center;
`

const Navbar = () => {
    return (
        <>
            {/* desktop navbar  */}
            <div className="mb-5 d-none d-lg-flex align-items-center justify-content-between" style={{ height: "100px", margin: '0 40px' }}>
                <div className="d-flex align-items-center col-6">
                    <Link to={'/'} className="me-5" style={{ fontSize: '20px', color: '#d1d1d1', textDecoration: "none" }}>
                        Home
                    </Link>
                    <Link style={{ fontSize: '20px', color: '#d1d1d1', textDecoration: "none" }}>
                        Litepaper Channel
                    </Link>
                </div>
                <div className="d-flex align-items-center col-6 justify-content-end">
                    <Link style={{ fontSize: '20px', color: '#9FC83B', textDecoration: "none" }}>
                        <div className="d-flex align-items-center">
                            Connect Wallet
                            <ArrowButton className="ms-2">
                                <ArrowForwardIos fontSize="small" />
                            </ArrowButton>
                        </div>
                    </Link>
                </div>
            </div>
            {/* tablet navbar */}
            <NavbarTablet className="mb-5 d-none d-sm-flex d-lg-none">
                <div className="d-flex align-items-center col-6">
                    <Link className="me-5" style={{ fontSize: '16px', color: '#d1d1d1', textDecoration: "none" }}>
                        Home
                    </Link>
                    <Link style={{ fontSize: '16px', color: '#d1d1d1', textDecoration: "none" }}>
                        Litepaper Channel
                    </Link>
                </div>
            </NavbarTablet>
            {/*mobile navbar*/}
            <NavbarTablet className="mb-5 d-flex d-sm-none">

            </NavbarTablet>
        </>
    );
}

export default Navbar;